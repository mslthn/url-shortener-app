package services

import (
    "backend/internal/models"
    "backend/internal/repository"
    "context"
    "errors"
    "fmt"

    "github.com/matoous/go-nanoid/v2"
)

type LinkService interface {
    CreateLink(ctx context.Context, req models.CreateLinkRequest, userID uint) (*models.Link, error)
    GetLinksByUserID(ctx context.Context, userID uint) ([]models.Link, error)
    DeleteLink(ctx context.Context, id uint, userID uint) error
    GetOriginalURL(ctx context.Context, slug string) (string, error)
}

type linkServiceImpl struct {
    repo repository.LinkRepository
}

func NewLinkService(repo repository.LinkRepository) LinkService {
    return &linkServiceImpl{repo: repo}
}

func (s *linkServiceImpl) CreateLink(ctx context.Context, req models.CreateLinkRequest, userID uint) (*models.Link, error) {
    var slug string
    var err error

    if req.Slug != "" {
        existing, _ := s.repo.GetBySlug(ctx, req.Slug)
        if existing != nil {
            return nil, errors.New("slug already taken, please choose another one")
        }
        slug = req.Slug
    } else {
        slug, err = gonanoid.Generate("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6)
        if err != nil {
            return nil, fmt.Errorf("failed to generate random slug: %w", err)
        }
    }

    link := &models.Link{
        UserID:      userID,
        OriginalURL: req.OriginalURL,
        Slug:        slug,
    }

    if err := s.repo.Create(ctx, link); err != nil {
        return nil, err
    }

    return link, nil
}

func (s *linkServiceImpl) GetLinksByUserID(ctx context.Context, userID uint) ([]models.Link, error) {
    links, err := s.repo.GetByUserID(ctx, userID)
    if err != nil {
        return nil, fmt.Errorf("failed to fetch links: %w", err)
    }
    return links, nil
}

func (s *linkServiceImpl) GetOriginalURL(ctx context.Context, slug string) (string, error) {
    link, err := s.repo.GetBySlug(ctx, slug)
    if err != nil {
        return "", errors.New("link not found")
    }

    go func() {
        _ = s.repo.RecordClick(context.Background(), link.ID)
    }()

    return link.OriginalURL, nil
}

func (s *linkServiceImpl) DeleteLink(ctx context.Context, id uint, userID uint) error {
    err := s.repo.Delete(ctx, id, userID)
    if err != nil {
        return fmt.Errorf("failed to delete link: %w", err)
    }
    return nil
}