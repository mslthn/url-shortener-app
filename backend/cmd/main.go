package main

import (
	"backend/internal/di"
	router "backend/internal/routes"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found, using system environment variables")
	}

	container := di.NewContainer()
	defer container.Close()

	r := router.SetupRouter(container)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server is running on port %s", port)
	if err := r.Run("localhost:" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}