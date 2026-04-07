package models

import "time"

type User struct {
	ID           uint      `json:"id"`
	Email        string    `json:"email"`
	Fullname     string    `json:"fullname"`
	Profession   string    `json:"profession"`
	PasswordHash string    `json:"-"`
	CreatedAt    time.Time `json:"created_at"`
}

type RegisterRequest struct {
	Email      string `json:"email" binding:"required,email"`
	Fullname   string `json:"fullname" binding:"required"`
	Profession string `json:"profession"`
	Password   string `json:"password" binding:"required,min=8"`
}

type LoginRequest struct {
	Email      string `json:"email" binding:"required,email"`
	Password   string `json:"password" binding:"required"`
}

type LoginResponse struct {
	Token string       `json:"token"`
	User  UserResponse `json:"user"`
}

type UserResponse struct {
	ID         uint   `json:"id"`
	Email      string `json:"email"`
	Fullname   string `json:"fullname"`
	Profession string `json:"profession"`
}