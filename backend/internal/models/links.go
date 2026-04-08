package models

import "time"

type Link struct {
	ID          uint       `json:"id"`
	UserID      uint       `json:"user_id"`
	OriginalURL string     `json:"original_url"`
	Slug        string     `json:"slug"`
	CreatedAt   time.Time  `json:"created_at"`
	DeletedAt   *time.Time `json:"deleted_at,omitempty"`
	ClickCount  int       `json:"click_count"`
}

type CreateLinkRequest struct {
	OriginalURL string `json:"original_url" binding:"required,url"`
	Slug        string `json:"slug"`
}
