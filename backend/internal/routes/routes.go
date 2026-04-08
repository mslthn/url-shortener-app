package router

import (
	"backend/internal/di"
	"backend/internal/middleware"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetupRouter(container *di.Container) *gin.Engine {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	r.POST("/register", container.UserHandler.Register)
	r.POST("/login", container.UserHandler.Login)

	r.GET("/:slug", container.LinkHandler.Redirect)

	api := r.Group("/api/v1")
	api.Use(middleware.AuthMiddleware())
	{
		api.POST("/links", container.LinkHandler.Create)
		api.GET("/links", container.LinkHandler.GetMyLinks)
		api.DELETE("/links/:id", container.LinkHandler.Delete)

		api.GET("/profile", container.UserHandler.GetProfile)
	}

	return r
}
