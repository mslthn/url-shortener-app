package repository

import (
	"backend/internal/models"
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type LinkRepository interface {
	Create(ctx context.Context, link *models.Link) error
	GetBySlug(ctx context.Context, slug string) (*models.Link, error)
	GetByUserID(ctx context.Context, userID uint) ([]models.Link, error)
	Delete(ctx context.Context, id uint, userID uint) error
	RecordClick(ctx context.Context, linkID uint) error
}

type linkRepository struct {
	db *pgxpool.Pool
}

func NewLinkRepository(pgx *pgxpool.Pool) LinkRepository {
	return &linkRepository {
		db: pgx,
	}
}

func (r *linkRepository) Create(ctx context.Context, link *models.Link) error {
    query := `
        INSERT INTO links (user_id, original_url, slug, created_at) 
        VALUES ($1, $2, $3, NOW()) 
        RETURNING id, created_at`

    err := r.db.QueryRow(ctx, query, 
        link.UserID, 
        link.OriginalURL, 
        link.Slug,
    ).Scan(&link.ID, &link.CreatedAt)

    if err != nil {
        return err
    }

    return nil
}

func (r *linkRepository) GetBySlug(ctx context.Context, slug string) (*models.Link, error) {
	query := `SELECT id, user_id, original_url, slug, created_at FROM links WHERE slug = $1 AND deleted_at IS NULL`
	
	link := &models.Link{}
	err := r.db.QueryRow(ctx, query, slug).
		Scan(&link.ID, &link.UserID, &link.OriginalURL, &link.Slug, &link.CreatedAt)

	if err != nil {
		return nil, err
	}
	return link, nil
}

func (r *linkRepository) GetByUserID(ctx context.Context, userID uint) ([]models.Link, error) {
	query := `SELECT id, original_url, slug, created_at FROM links WHERE user_id = $1 AND deleted_at IS NULL`
	
	rows, err := r.db.Query(ctx, query, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var links []models.Link
	for rows.Next() {
		var l models.Link
		if err := rows.Scan(&l.ID, &l.OriginalURL, &l.Slug, &l.CreatedAt); err != nil {
			return nil, err
		}
		links = append(links, l)
	}
	
	return links, nil
}

func (r *linkRepository) Delete(ctx context.Context, id uint, userID uint) error {
	query := `UPDATE links SET deleted_at = now() WHERE id = $1 AND user_id = $2`
	_, err := r.db.Exec(ctx, query, id, userID)
	return err
}

func (r *linkRepository) RecordClick(ctx context.Context, linkID uint) error {
    // Kita gunakan increment sederhana pada kolom click_count di tabel links
    query := `UPDATE links SET click_count = click_count + 1 WHERE id = $1`
    _, err := r.db.Exec(ctx, query, linkID)
    return err
}