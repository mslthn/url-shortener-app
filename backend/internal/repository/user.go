package repository

import (
	"context"
	"backend/internal/models"
	"github.com/jackc/pgx/v5/pgxpool"
)

type UserRepository interface {
	Create(ctx context.Context, user *models.User) error
	GetByEmail(ctx context.Context, email string) (*models.User, error)
	GetByID(ctx context.Context, id uint) (*models.User, error)
}

type userRepository struct {
	db *pgxpool.Pool
}

func NewUserRepository(pgx *pgxpool.Pool) UserRepository {
	return &userRepository{
		db: pgx,
	}
}

func (r *userRepository) Create(ctx context.Context, user *models.User) error {
	query := `
		INSERT INTO users (fullname, email, profession, password_hash, created_at) 
		VALUES ($1, $2, $3, $4, now())
		RETURNING id, created_at`

	err := r.db.QueryRow(ctx, query, user.Fullname, user.Email, user.Profession, user.PasswordHash).
		Scan(&user.ID, &user.CreatedAt)

	return err
}

func (r *userRepository) GetByEmail(ctx context.Context, email string) (*models.User, error) {
	query := `SELECT id, email, fullname, profession, password_hash, created_at FROM users WHERE email = $1`
	
	user := &models.User{}
	err := r.db.QueryRow(ctx, query, email).
		Scan(&user.ID, &user.Email, &user.Fullname, &user.Profession, &user.PasswordHash, &user.CreatedAt)

	if err != nil {
		return nil, err
	}
	return user, nil
}

func (r *userRepository) GetByID(ctx context.Context, id uint) (*models.User, error) {
	query := `SELECT id, email, fullname, profession, created_at FROM users WHERE id = $1`
	
	user := &models.User{}
	err := r.db.QueryRow(ctx, query, id).
		Scan(&user.ID, &user.Email, &user.Fullname, &user.Profession, &user.CreatedAt)

	if err != nil {
		return nil, err
	}
	return user, nil
}