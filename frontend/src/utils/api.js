export const authorizedFetch = async (url, options = {}) => {
    const token = localStorage.getItem("token")
    
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }

    const response = await fetch(url, { ...options, headers })

    if (response.status === 401) {
        localStorage.removeItem("token")
        window.location.href = "/auth/login?error=session_expired"
        return
    }

    return response
}