import React, { useContext } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Auth } from "../context/AuthContext";

const LoginPage = () => {
  const {showPassword, setShowPassword} = useContext(Auth);
  let { register, loginFormSubmit, handleSubmit, navigate, errors } = useAuth();
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between border-r border-zinc-800 px-16 py-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Zap size={18} strokeWidth={3} className="text-black fill-black" />
          </div>

          <h1 className="text-3xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Hero */}
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[4px] text-lime-400">
            Welcome Back
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-lime-400">Today.</span>
          </h2>

          <p className="mt-8 max-w-lg text-lg text-zinc-400">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-700 p-6 text-center">
            <h3 className="text-3xl font-bold text-lime-400">20K+</h3>
            <p className="mt-2 text-zinc-400">Products</p>
          </div>

          <div className="rounded-2xl border border-zinc-700 p-6 text-center">
            <h3 className="text-3xl font-bold text-lime-400">50K+</h3>
            <p className="mt-2 text-zinc-400">Users</p>
          </div>

          <div className="rounded-2xl border border-zinc-700 p-6 text-center">
            <h3 className="text-3xl font-bold text-lime-400">4.9★</h3>
            <p className="mt-2 text-zinc-400">Rating</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#121212] p-10 shadow-2xl">
          <h2 className="text-5xl font-bold">Sign in</h2>

          <p className="mt-3 text-zinc-400">
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleSubmit(loginFormSubmit)}
            className="mt-10 space-y-6"
          >
            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={20}
              />

              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-zinc-700 bg-[#1B1B1B] py-4 pl-12 pr-4 outline-none transition focus:border-lime-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={20}
              />

              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters is required",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-2xl border border-zinc-700 bg-[#1B1B1B] py-4 pl-12 pr-12 outline-none transition focus:border-lime-400"
              />

              {showPassword ? (
                <EyeOff
                  size={20}
                  onClick={() => setShowPassword(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500"
                />
              ) : (
                <Eye
                  size={20}
                  onClick={() => setShowPassword(true)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500"
                />
              )}
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 py-4 text-lg font-semibold text-black transition hover:bg-lime-300">
              Sign in
              <ArrowRight size={22} />
            </button>
          </form>

          <p className="mt-8 text-center text-zinc-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="font-semibold text-lime-400 hover:underline cursor-pointer"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
