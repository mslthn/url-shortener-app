const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  const baseStyle = "px-4 py-2 w-full rounded font-medium transition-colors"
  const variants = {
    blue: "flex flex-row items-center gap-1 p-2 bg-blue-700 text-white hover:bg-blue-800 cursor-pointer",
    white: "flex flex-row items-center gap-1 bg-white text-blue-800 hover:bg-gray-200 cursor-pointer",
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