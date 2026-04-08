const Input = ({ label, type, placeholder, helperText, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="text-sm font-semibold text-slate-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-800 transition-all"
        {...props}
      />
      {helperText && (
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;