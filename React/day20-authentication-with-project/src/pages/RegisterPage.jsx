import React from "react";
import { User, Mail, Lock } from "lucide-react";
import { useAuth } from "../hooks/authHooks";

const RegisterPage = () => {
  let { navigate, register, handleSubmit, errors,registerForm } = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-2">Register</h1>

        <p className="text-gray-500 text-center mb-6">Create your account</p>

        <form onSubmit={handleSubmit(registerForm)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">Full Name</label>

            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <User size={20} className="text-gray-500" />
              <input
                {...register("fullname", {
                  required: "Full name is required",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
            {errors.fullname && (
              <p className="text-red">{errors.fullname.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <Mail size={20} className="text-gray-500" />
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
            {errors.email && <p className="text-red">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium">Password</label>

            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <Lock size={20} className="text-gray-500" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 character are required",
                  },
                })}
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
            {errors.password && <p className="text-red">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
