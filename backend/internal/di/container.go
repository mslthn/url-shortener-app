package di

import (
	"backend/internal/handlers"
	"backend/internal/repository"
	"backend/internal/services"
	"context"
	"log"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Container struct {
	DB          *pgxpool.Pool
	LinkHandler *handlers.LinkHandler
	UserHandler *handlers.UserHandler
}

func NewContainer() *Container {
	ctx := context.Background()

	dbPool, err := pgxpool.New(ctx, os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}

	if err := dbPool.Ping(ctx); err != nil {
		log.Fatalf("Database ping failed: %v\n", err)
	}

	linkRepo := repository.NewLinkRepository(dbPool)
	userRepo := repository.NewUserRepository(dbPool)

	linkService := services.NewLinkService(linkRepo)
	userService := services.NewUserService(userRepo)

	linkHandler := handlers.NewLinkHandler(linkService)
	userHandler := handlers.NewUserHandler(userService)

	return &Container{
		DB:          dbPool,
		LinkHandler: linkHandler,
		UserHandler: userHandler,
	}
}

func (c *Container) Close() {
	c.DB.Close()
}