import React from "react";
import {
  Music2,
  Mic,
  Headphones,
  User,
  AtSign,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  
  const { handleSubmit, register, reset, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      role:"listener"
    }
  })
  const role = watch("role")
  const submitHandler = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0914] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-125 w-125 rounded-full bg-purple-700/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-100 w-100 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-115 rounded-2xl border border-white/10 bg-[#1b1a20]/90 backdrop-blur-xl p-8 shadow-2xl">
        {/* Logo */}
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-white">
            Music<span className="text-purple-400">Hub</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Join the sound revolution.
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Listener */}
          <button
            type="button"
            onClick={() => setValue("role", "listener")}
            className={`flex h-24 flex-col items-center justify-center rounded-xl border transition-all duration-300 ${
              role === "listener"
                ? "border-purple-500 bg-purple-500/10 text-purple-300"
                : "border-white/10 text-gray-300 hover:border-purple-500 hover:bg-purple-500/5"
            }`}
          >
            <Music2 size={20} />
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em]">
              Listener
            </span>
          </button>

          {/* Artist */}
          <button
            type="button"
            onClick={() => setValue("role", "artist")}
            className={`flex h-24 flex-col items-center justify-center rounded-xl border transition-all duration-300 ${
              role === "artist"
                ? "border-purple-500 bg-purple-500/10 text-purple-300"
                : "border-white/10 text-gray-300 hover:border-purple-500 hover:bg-purple-500/5"
            }`}
          >
            <Mic size={20} />
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em]">
              Artist
            </span>
          </button>
        </div>

        {/* Inputs */}
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <Input
            {...register("fullname", { required: "Full name is required" })}
            icon={<User size={18} />}
            placeholder="Full Name"
            error={errors.fullname?.message}
          />

          <Input
            {...register("username", { required: "Username is required" })}
            icon={<AtSign size={18} />}
            placeholder="Username"
            error={errors.username?.message}
          />

          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            icon={<Mail size={18} />}
            placeholder="Email Address"
            type="email"
            error={errors.email?.message}
          />
          <input {...register("role")} type="hidden" />

          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            icon={<Lock size={18} />}
            placeholder="Password"
            type="password"
            error={errors.fullname?.message}
          />

          <label className="flex items-start gap-2 pt-1 text-xs text-gray-400">
            <input
              {...register("terms", { required: "Click on terms" })}
              type="checkbox"
              className="mt-0.5 accent-purple-500"
            />

            {errors.terms && (
              <p className="text-xs text-red-400">{errors.terms.message}</p>
            )}
            <span>
              I agree to the{" "}
              <span className="cursor-pointer text-purple-300">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-purple-300">
                Privacy Policy
              </span>
            </span>
          </label>

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#d8b6ff] to-[#7c3aed] py-3 font-semibold text-white transition hover:scale-[1.02]"
          >
            Register
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button className="font-semibold text-purple-300 hover:text-white">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

const Input = ({ icon, placeholder, type = "text", error, ...props }) => {
  return (
    <div>
      <div
        className={`flex items-center gap-3 rounded-full px-4 py-3 transition ${
          error
            ? "border border-red-500"
            : "border border-white/10 focus-within:border-purple-500"
        } bg-[#101014]`}
      >
        <div className={error ? "text-red-400" : "text-gray-400"}>{icon}</div>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
          {...props}
        />
      </div>

      {error && <p className="mt-1 ml-4 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default RegisterPage;
