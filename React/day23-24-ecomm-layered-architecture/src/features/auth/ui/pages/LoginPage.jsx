import React from "react";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

const LoginPage = () => {
  const { navigate, register, handleSubmit, errors, loginForm } = useAuth();

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-zinc-400 mt-2">Sign in to continue shopping.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              User Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                placeholder="@johndoe"
                {...register("username", {
                  required: "User name is required",
                })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition"
              />
            </div>

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Password</label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition"
              />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition"
          >
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-zinc-400 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-lime-400 hover:text-lime-300 font-medium"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
