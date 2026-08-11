import React from "react";
import { useForm } from "react-hook-form";
import { Network, Cloud, Terminal, LogIn } from "lucide-react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121015] text-white">
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-[-100px] h-[450px] w-[450px] rounded-full bg-[#4b3c70]/10 blur-[120px]" />

        <div className="absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#5d4690]/10 blur-[130px]" />
      </div>

      {/* ================= MAIN ================= */}

      <main className="relative flex min-h-screen flex-col items-center justify-center px-5 py-10">
        {/* ================= LOGIN CARD ================= */}

        <div
          className="
            w-full max-w-[430px]
            rounded-xl
            border border-[#2d2a31]
            bg-[#1b191e]
            px-8 py-8
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            sm:px-8
          "
        >
          {/* ================= LOGO ================= */}

          <div className="flex flex-col items-center">
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-lg
                bg-[#7352b7]
                shadow-[0_8px_25px_rgba(115,82,183,0.2)]
              "
            >
              <Network size={27} strokeWidth={1.8} className="text-[#dfceff]" />
            </div>

            <h1 className="mt-4 text-[25px] font-bold tracking-tight">
              Synthetix AI
            </h1>

            <p className="mt-1 text-sm text-[#c0bcc5]">
              Sign in to your workspace
            </p>
          </div>

          {/* ================= SOCIAL LOGIN ================= */}

          <div className="mt-7 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="
                flex h-[42px] items-center justify-center gap-2
                rounded-lg
                border border-[#3b383f]
                bg-[#29272d]
                text-[11px] font-semibold
                tracking-wide
                transition
                hover:bg-[#302d35]
              "
            >
              <Cloud size={18} strokeWidth={1.8} className="text-[#d2cdd6]" />
              GOOGLE
            </button>

            <button
              type="button"
              className="
                flex h-[42px] items-center justify-center gap-2
                rounded-lg
                border border-[#3b383f]
                bg-[#29272d]
                text-[11px] font-semibold
                tracking-wide
                transition
                hover:bg-[#302d35]
              "
            >
              <Terminal
                size={17}
                strokeWidth={1.8}
                className="text-[#d2cdd6]"
              />
              GITHUB
            </button>
          </div>

          {/* ================= DIVIDER ================= */}

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#302d34]" />

            <span className="whitespace-nowrap text-xs text-[#d0cbd3]">
              or continue with email
            </span>

            <div className="h-px flex-1 bg-[#302d34]" />
          </div>

          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="
                  mb-2 block
                  text-[11px]
                  font-semibold
                  tracking-wide
                  text-[#d3ced7]
                "
              >
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className={`
                  h-[42px]
                  w-full
                  rounded-lg
                  border
                  bg-[#0e0c11]
                  px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-[#514d57]
                  transition
                  focus:border-[#7958b9]
                  ${errors.email ? "border-red-500" : "border-[#312e35]"}
                `}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="
                    text-[11px]
                    font-semibold
                    tracking-wide
                    text-[#d3ced7]
                  "
                >
                  PASSWORD
                </label>

                <button
                  type="button"
                  className="
                    text-xs
                    text-[#c5a7f1]
                    transition
                    hover:text-[#d6c0f7]
                  "
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`
                  h-[42px]
                  w-full
                  rounded-lg
                  border
                  bg-[#0e0c11]
                  px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-[#514d57]
                  transition
                  focus:border-[#7958b9]
                  ${errors.password ? "border-red-500" : "border-[#312e35]"}
                `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must contain at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* REMEMBER ME */}

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                className="
                  h-4 w-4
                  cursor-pointer
                  appearance-none
                  rounded
                  border border-[#454149]
                  bg-[#0e0c11]
                  checked:border-[#7655b7]
                  checked:bg-[#7655b7]
                "
                {...register("remember")}
              />

              <span className="text-xs text-[#c7c2cb]">Stay signed in</span>
            </label>

            {/* ================= SIGN IN BUTTON ================= */}

            <button
              type="submit"
              className="
                flex h-[51px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#7353b6]
                text-sm
                font-medium
                text-white
                shadow-[0_8px_25px_rgba(115,83,182,0.12)]
                transition
                hover:bg-[#805fc3]
                active:scale-[0.99]
              "
            >
              <span>Sign In</span>

              <LogIn size={18} strokeWidth={1.8} />
            </button>
          </form>

          {/* ================= BOTTOM DIVIDER ================= */}

          <div className="mt-7 h-px w-full bg-[#2d2a31]" />

          {/* ================= SIGN UP ================= */}

          <p className="mt-6 text-center text-xs text-[#d0cbd3]">
            Don't have an account?{" "}
            <button
              type="button"
              className="
                font-semibold
                text-[#c7a7f2]
                hover:underline
              "
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-6 text-center">
          <p className="text-xs text-[#625e67]">
            © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          </p>

          <div className="mt-2 flex justify-center gap-5">
            <button
              type="button"
              className="text-xs text-[#625e67] hover:text-[#aaa4ae]"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="text-xs text-[#625e67] hover:text-[#aaa4ae]"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* ================= DECORATIVE IMAGE ================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-24
            right-20
            hidden
            h-[245px]
            w-[245px]
            overflow-hidden
            rounded-xl
            opacity-[0.12]
            xl:block
          "
        >
          <div
            className="
              h-full w-full
              bg-[radial-gradient(ellipse_at_center,#7655b7_0%,transparent_45%)]
              blur-2xl
            "
          />

          <div
            className="
              absolute inset-10
              rounded-[45%]
              border
              border-[#8d6ac5]
              rotate-[35deg]
              blur-[1px]
            "
          />

          <div
            className="
              absolute inset-14
              rounded-[45%]
              border
              border-[#8d6ac5]
              rotate-[-35deg]
              blur-[1px]
            "
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
