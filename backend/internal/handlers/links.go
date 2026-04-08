package handlers

import (
	"backend/internal/models"
	service "backend/internal/services"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type LinkHandler struct {
	service service.LinkService
}

func NewLinkHandler(service service.LinkService) *LinkHandler {
	return &LinkHandler{service: service}
}

func (h *LinkHandler) Create(c *gin.Context) {
    var req models.CreateLinkRequest

    // DEBUG 1: Cek apakah JSON masuk
    if err := c.ShouldBindJSON(&req); err != nil {
        fmt.Println("DEBUG ERROR BINDING:", err) // Lihat di terminal!
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // DEBUG 2: Cek isi request
    fmt.Printf("DEBUG REQ: URL=%s, Slug=%s\n", req.OriginalURL, req.Slug)

    // Ambil UserID
    id, exists := c.Get("currentUser")
    if !exists {
        fmt.Println("DEBUG ERROR: currentUser tidak ada di context")
        c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
        return
    }
    userID := id.(uint)

    link, err := h.service.CreateLink(c.Request.Context(), req, userID)
    if err != nil {
        // DEBUG 3: Tampilkan error database/service
        fmt.Println("DEBUG ERROR SERVICE:", err) // INI AKAN MEMBERITAHU PENYEBAB ASLINYA
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()}) 
        return
    }

    c.JSON(http.StatusCreated, gin.H{"data": link})
}

func (h *LinkHandler) GetMyLinks(c *gin.Context) {
	userID := c.MustGet("currentUser").(uint)

	links, err := h.service.GetLinksByUserID(c.Request.Context(), userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch links"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": links})
}

func (h *LinkHandler) Delete(c *gin.Context) {
	// Ambil ID dari param URL /links/:id
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	userID := c.MustGet("currentUser").(uint)

	err = h.service.DeleteLink(c.Request.Context(), uint(id), userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete link"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Link deleted successfully"})
}

func (h *LinkHandler) Redirect(c *gin.Context) {
	slug := c.Param("slug")

	originalURL, err := h.service.GetOriginalURL(c.Request.Context(), slug)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Link not found"})
		return
	}

	c.Redirect(http.StatusMovedPermanently, originalURL)
}