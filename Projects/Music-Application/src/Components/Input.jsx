import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  icon,
  placeholder,
  type = "text",
  error,
  showPassword,
  setShowPassword,
  ...props
}) => {
  return (
    <div>
      {/* Label */}
      <label className="mb-3 block text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
        {label}
      </label>

      {/* Input */}
      <div
        className={`flex items-center rounded-xl border bg-[#191919] px-4 py-4 transition-all duration-300 ${
          error
            ? "border-red-500"
            : "border-white/10 focus-within:border-purple-500"
        }`}
      >
        <div className="text-gray-400">{icon}</div>

        <input
          type={type}
          placeholder={placeholder}
          className="mx-3 flex-1 bg-transparent text-base text-white placeholder:text-gray-500 outline-none"
          {...props}
        />

        {setShowPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 transition hover:text-purple-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="mt-2 ml-2 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default Input