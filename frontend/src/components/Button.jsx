const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition-colors"
  const variants = {
    blue: "p-2 bg-blue-700 text-white hover:bg-blue-800",
    white: "bg-white text-blue-800 hover:bg-gray-100/50",
  }

  return (
    <button 
        className={`${baseStyle} ${variants[variant]}`}
        onClick={onClick}
        {...props}
    >
      {children}
    </button>
  )
}

export default Button