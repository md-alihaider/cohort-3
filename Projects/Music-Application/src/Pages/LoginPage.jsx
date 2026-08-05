import React, { useState } from "react";
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Music2,
  Headphones,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Input from "../Components/Input";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0914]">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Floating Icons */}
      <Music2
        size={34}
        className="floating absolute left-28 top-24 text-purple-300/30"
      />

      <Headphones
        size={28}
        className="floating absolute bottom-24 left-20 text-purple-300/30"
        style={{ animationDelay: "1.5s" }}
      />

      <Music2
        size={24}
        className="floating absolute left-[46%] top-32 text-purple-300/20"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Layout */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">
        {/* LEFT SIDE */}
        <div className="floating hidden w-1/2 flex-col items-center lg:flex">
          <img
            src="https://images.unsplash.com/photo-1609800029525-b91fdea39774?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="MusicHub"
            className="w-100 rounded-2xl object-cover"
          />

          <h1 className="mt-10 bg-linear-to-r from-white via-[#d7c0ff] to-[#9b5cff] bg-clip-text text-5xl font-bold text-transparent">
            MusicHub
          </h1>

          <p className="mt-4 max-w-md text-center text-xl leading-relaxed text-gray-300">
            Experience high-fidelity sound
            <br />
            tailored to your soul.
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="w-full lg:w-auto">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1d1d1d]/95 p-10 shadow-2xl backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-white">Welcome Back</h2>

            <p className="mt-3 text-lg text-gray-400">
              Sign in to continue your journey.
            </p>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="mt-12 space-y-6"
            >
              <Input
                label="EMAIL ADDRESS"
                icon={<Mail size={18} />}
                placeholder="name@example.com"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
              />

              <Input
                label="PASSWORD"
                icon={<Lock size={18} />}
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                error={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#9b5cff] to-[#6c38ff] py-4 text-lg font-semibold text-white transition hover:scale-[1.02]">
                Login
                <ArrowRight size={20} />
              </button>
            </form>

            <p className="mt-8 text-center text-gray-400">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-semibold text-purple-300"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
