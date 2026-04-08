package services

import (
	"backend/internal/lib"
	"backend/internal/models"
	"backend/internal/repository"
	"context"
	"errors"
	"fmt"
)

type UserService interface {
	Register(ctx context.Context, req models.RegisterRequest) (*models.UserResponse, error)
	Login(ctx context.Context, req models.LoginRequest) (*models.LoginResponse, error)
	GetProfile(ctx context.Context, userID uint) (*models.UserResponse, error)
}

type userServiceImpl struct {
	repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) UserService {
	return &userServiceImpl{repo: repo}
}

func (s *userServiceImpl) Register(ctx context.Context, req models.RegisterRequest) (*models.UserResponse, error) {
	existingUser, _ := s.repo.GetByEmail(ctx, req.Email)
	if existingUser != nil {
		return nil, errors.New("email already registered!!!")
	}

	hashedPassword, err := lib.HashPassword(req.Password)
	if err != nil {
		return nil, err
	}

	user := &models.User{
		Email:        req.Email,
		Fullname:     req.Fullname,
		Profession:   req.Profession,
		PasswordHash: hashedPassword,
	}

	if err := s.repo.Create(ctx, user); err != nil {
		return nil, err
	}

	return &models.UserResponse{
		ID:         user.ID,
		Email:      user.Email,
		Fullname:   user.Fullname,
		Profession: user.Profession,
	}, nil
}

func (s *userServiceImpl) Login(ctx context.Context, req models.LoginRequest) (*models.LoginResponse, error) {
    user, err := s.repo.GetByEmail(ctx, req.Email)
    if err != nil {
        return nil, errors.New("cannot find email")
    }

    fmt.Println("User :", user.Email)
    
    match, err := lib.VerifyPassword(req.Password, user.PasswordHash)
    if err != nil {
        return nil, err
    }
    
    if !match {
        fmt.Println("Login Error: Password tidak cocok")
        return nil, errors.New("invalid password!!!")
    }

    // 3. Jika lolos semua, baru generate token
    token, err := lib.GenerateToken(user.ID)
    if err != nil {
        return nil, err
    }

    return &models.LoginResponse{
        Token: token,
        User: models.UserResponse{
            ID:         user.ID,
            Email:      user.Email,
            Fullname:   user.Fullname,
            Profession: user.Profession,
        },
    }, nil
}

func (s *userServiceImpl) GetProfile(ctx context.Context, userID uint) (*models.UserResponse, error) {
	user, err := s.repo.GetByID(ctx, userID)
	if err != nil {
		return nil, err
	}

	return &models.UserResponse{
		ID:         user.ID,
		Email:      user.Email,
		Fullname:   user.Fullname,
		Profession: user.Profession,
	}, nil
}