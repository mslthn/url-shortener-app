const Button = ({
  children,
  variant = 'blue',
  onClick,
  isLoading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyle = "px-4 py-2.5 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm"

  const variants = {
    blue: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 disabled:bg-blue-300 disabled:cursor-not-allowed",
    white: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
  }

  const combinedClassName = `${baseStyle} ${variants[variant] || variants.blue} ${className}`

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button