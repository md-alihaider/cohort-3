import React from "react";
import { useForm } from "react-hook-form";

const CreateUserForm = () => {
  // 1. Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      role: "Developer",
    },
  });

  // 2. The submit handler receives the data directly if validation passes
  const onSubmit = (data) => {
    console.log("New User Submitted:", data);

    // Optional: Clears the form back to defaultValues after a successful submit
    reset();
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Create New User</h2>

      {/* 3. Pass your onSubmit function into hook-form's handleSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            // 4. Spread the register function instead of using value/onChange
            {...register("name", { required: "Full name is required" })}
            className={`w-full bg-gray-700 border ${
              errors.name ? "border-red-500" : "border-gray-600"
            } rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500`}
          />
          {/* Display validation error if it exists */}
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full bg-gray-700 border ${
              errors.email ? "border-red-500" : "border-gray-600"
            } rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Role Select */}
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Role
          </label>
          <select
            id="role"
            {...register("role")}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-4"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
