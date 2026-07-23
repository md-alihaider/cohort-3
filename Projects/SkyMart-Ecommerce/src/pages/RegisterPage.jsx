import React from "react";
import { ArrowRight, Eye, Lock, Mail, User, Zap } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  let { register, registerFormSubmit, handleSubmit, navigate, errors } =
    useAuth();
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-8">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-[0_0_30px_rgba(198,255,0,.15)]">
          <Zap size={18} strokeWidth={3} className="fill-black text-black" />
        </div>

        <h1 className="text-[34px] font-extrabold tracking-[-1.5px] text-white">
          Sky<span className="text-primary">Mart</span>
        </h1>
      </div>

      {/* Card */}
      <section className="w-full max-w-117.5 rounded-[30px] border border-border bg-card px-8 py-8 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
        {/* Heading */}
        <h2 className="text-[38px] leading-[0.92] tracking-[-2px] font-extrabold text-white">
          Create account
        </h2>

        <p className="mt-3 text-[18px] text-muted">
          Join SkyMart and start shopping
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(registerFormSubmit)} className="mt-7 space-y-3">
          {/* Name */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="Full name"
              className="h-14.5 w-full rounded-[18px] border border-border bg-[#1A1A1A] pl-16 pr-6 text-[19px] text-white outline-none transition-all placeholder:text-muted focus:border-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              {...register("email", {
                required: "email is required",
              })}
              type="email"
              placeholder="Email address"
              className="h-14.5 w-full rounded-[18px] border border-border bg-[#1A1A1A] pl-16 pr-6 text-[19px] text-white outline-none transition-all placeholder:text-muted focus:border-primary"
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
              size={18}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters is required",
                },
              })}
              type="password"
              placeholder="Password (min 6 chars)"
              className="h-14.5 w-full rounded-[18px] border border-border bg-[#1A1A1A] pl-16 pr-16 text-[19px] text-white outline-none transition-all placeholder:text-muted focus:border-primary"
            />

            <Eye
              size={18}
              className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-muted"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="h-14.5 w-full rounded-[18px] border border-border bg-[#1A1A1A] pl-16 pr-6 text-[19px] text-white outline-none transition-all placeholder:text-muted focus:border-primary"
            />
          </div>

          {/* Button */}
          <button className="mt-3 flex h-14.5 w-full items-center justify-center gap-3 rounded-[18px] bg-primary text-[18px] font-bold text-black transition hover:brightness-110">
            Create Account
            <ArrowRight size={26} />
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-[19px] text-muted">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            to="/login"
            className="font-bold text-primary hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
