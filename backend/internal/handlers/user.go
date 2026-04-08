package handlers

import (
	"backend/internal/models"
	"backend/internal/services"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserHandler struct {
	service services.UserService
}

func NewUserHandler(service services.UserService) *UserHandler {
	return &UserHandler{service: service}
}

func (h *UserHandler) Register(c *gin.Context) {
	var req models.RegisterRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := h.service.Register(c.Request.Context(), req)
	if err != nil {
		// cer email sudah terdaftarf
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "User registered successfully",
		"data":    user,
	})
}

func (h *UserHandler) Login(c *gin.Context) {
    var req models.LoginRequest

    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Binding error: " + err.Error()})
        return
    }

    fmt.Printf("DEBUG HANDLER - Email: '%s', Pass: '%s'\n", req.Email, req.Password)

    res, err := h.service.Login(c.Request.Context(), req)
    if err != nil {
        // Tampilkan error asli dari service agar kita tahu gagalnya di mana
        c.JSON(http.StatusUnauthorized, gin.H{
            "error":      "#h Invalid email or password",
            "debug_msg":  err.Error(), // Munculkan error asli dari service
        })
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "message": "Login successful",
        "data":    res,
    })
}

func (h *UserHandler) GetProfile(c *gin.Context) {
	userID := c.MustGet("currentUser").(uint)

	user, err := h.service.GetProfile(c.Request.Context(), userID)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": user,
	})
}