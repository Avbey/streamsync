package forms

type Token struct {
	RefreshToken string `form:"refresh_token" json:"refresh_token" binding:"required"`
}
