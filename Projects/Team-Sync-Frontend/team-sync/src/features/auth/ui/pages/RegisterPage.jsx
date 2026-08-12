import { useState } from "react";
import { User, Mail, Lock, Sparkles, Network } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {register,handleSubmit,onRegisterSubmit,watch,errors,navigate} = useAuth()

  const password = watch("password", "");

  // Password strength
  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const strength = Object.values(passwordChecks).filter(Boolean).length;

  const getStrengthText = () => {
    if (!password) return "";
    if (strength <= 2) return "Weak password";
    if (strength <= 4) return "Medium password";
    return "Strong password";
  };

  

  return (
    <div className="min-h-screen bg-[#121015] text-white">
      {/* Main */}
      <main className="grid min-h-[calc(100vh-88px)] lg:grid-cols-2">
        {/* ========================================
            LEFT PANEL
        ======================================== */}
        <section className="relative hidden overflow-hidden border-r border-[#292631] lg:block">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://img.magnific.com/free-vector/wavy-background-concept_23-2148497712.jpg?semt=ais_test_b&w=740&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            {/* Dark overlays */}
            <div className="absolute inset-0 bg-[#071329]/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0e101c] via-transparent to-[#071329]/20" />
          </div>

          {/* Logo */}
          <div className="absolute left-6 top-5 z-10">
            <h2 className="text-xl font-bold tracking-tight">Synthetix AI</h2>
          </div>

          {/* Left content */}
          <div className="absolute bottom-12 left-12 right-12 z-10">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles
                size={20}
                strokeWidth={1.7}
                className="text-[#d8b8ff]"
              />

              <span className="text-xs font-semibold tracking-[0.25em] text-[#d8b8ff]">
                NEXT-GEN INTELLIGENCE
              </span>
            </div>

            <h1 className="max-w-lg text-4xl font-bold leading-[1.15] tracking-tight xl:text-[40px]">
              Accelerate your team's
              <br />
              intelligence.
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-7 text-[#d5d1db]">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>

            {/* Stats */}
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="mt-1 text-xs text-[#96929f]">Uptime SLA</p>
              </div>

              <div>
                <p className="text-2xl font-bold">ISO</p>
                <p className="mt-1 text-xs text-[#96929f]">27001 Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            RIGHT PANEL
        ======================================== */}
        <section className="flex items-center justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-24">
          <div className="w-full max-w-[492px]">
            {/* Heading */}
            <div className="mb-9">
              <h1 className="text-3xl font-bold tracking-tight sm:text-[34px]">
                Create your account
              </h1>

              <p className="mt-2 text-[15px] text-[#c2bec8]">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-7"
            >
              {/* ==================================
                  FULL NAME
              ================================== */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#d4d0d8]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#625e6a]"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`h-[60px] w-full rounded-lg border bg-[#1c1a1f] pl-16 pr-5 text-[16px] text-white outline-none transition placeholder:text-[#5d5965] focus:border-[#a982df] ${
                      errors.fullName ? "border-red-500" : "border-[#4a4650]"
                    }`}
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Enter a valid name",
                      },
                    })}
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* ==================================
                  EMAIL
              ================================== */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#d4d0d8]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#625e6a]"
                  />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className={`h-[60px] w-full rounded-lg border bg-[#1c1a1f] pl-16 pr-5 text-[16px] text-white outline-none transition placeholder:text-[#5d5965] focus:border-[#a982df] ${
                      errors.email ? "border-red-500" : "border-[#4a4650]"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* ==================================
                  PASSWORD
              ================================== */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-[#d4d0d8]">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#625e6a]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`h-[60px] w-full rounded-lg border bg-[#1c1a1f] pl-16 pr-5 text-[16px] text-white outline-none transition placeholder:text-[#5d5965] focus:border-[#a982df] ${
                      errors.password ? "border-red-500" : "border-[#4a4650]"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                  />
                </div>

                {/* Strength bars */}
                {password && (
                  <>
                    <div className="mt-2 flex gap-1">
                      {[1, 2, 3, 4].map((bar) => (
                        <div
                          key={bar}
                          className={`h-[5px] flex-1 rounded-full transition-all ${
                            bar <= Math.ceil((strength / 5) * 4)
                              ? "bg-[#c9a8f5]"
                              : "bg-[#29262e]"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="mt-1 text-xs text-[#c9a8f5]">
                      {getStrengthText()}
                    </p>
                  </>
                )}

                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* ==================================
                  TERMS
              ================================== */}
              <div>
                <label className="flex cursor-pointer items-start gap-4">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    {...register("terms", {
                      required: "You must accept the Terms of Service",
                    })}
                  />

                  <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#514d57] bg-[#1c1a1f] peer-checked:border-[#a87be2] peer-checked:bg-[#8d64c9]">
                    <svg
                      viewBox="0 0 24 24"
                      className="hidden h-3.5 w-3.5 text-white peer-checked:block"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="m5 12 4 4L19 7" />
                    </svg>
                  </span>

                  <span className="text-[13px] leading-5 text-[#c5c1ca]">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-[#c5a7ed] hover:underline"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-[#c5a7ed] hover:underline"
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* ==================================
                  CREATE ACCOUNT
              ================================== */}
              <button
                type="submit"
                className="h-[58px] w-full rounded-lg bg-gradient-to-r from-[#7655b8] to-[#c1a5f4] text-[16px] font-bold text-[#171020] shadow-[0_8px_25px_rgba(141,100,201,0.15)] transition hover:brightness-110 active:scale-[0.99]"
              >
                Create Account
              </button>

              {/* ==================================
                  DIVIDER
              ================================== */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#29262e]" />

                <span className="text-[11px] font-medium text-[#595560]">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-[#29262e]" />
              </div>

              {/* ==================================
                  SOCIAL BUTTONS
              ================================== */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex h-[60px] items-center justify-center gap-3 rounded-lg border border-[#4a4650] bg-transparent text-[16px] transition hover:bg-[#1c1a20]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#151515] text-xs">
                    G
                  </span>
                  Google
                </button>

                <button
                  type="button"
                  className="flex h-[60px] items-center justify-center gap-3 rounded-lg border border-[#4a4650] bg-transparent text-[16px] transition hover:bg-[#1c1a20]"
                >
                  <Network size={18} />
                  SSO
                </button>
              </div>
            </form>

            {/* Login */}
            <p className="mt-14 text-center text-[15px] text-[#c6c2ca]">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/")}
                type="button"
                className="font-semibold text-[#c9a9f3] hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
        </section>
      </main>

      {/* ========================================
          FOOTER
      ======================================== */}
      <footer className="flex min-h-[88px] items-center justify-between border-t border-[#25222a] px-6 lg:px-12">
        <h2 className="text-xl font-bold">Synthetix AI</h2>

        <nav className="hidden items-center gap-7 text-xs text-[#c0bbc5] md:flex">
          <button className="hover:text-white">Privacy Policy</button>

          <button className="hover:text-white">Terms of Service</button>

          <button className="hover:text-white">Security</button>

          <button className="hover:text-white">System Status</button>
        </nav>

        <p className="hidden text-xs text-[#c0bbc5] lg:block">
          © 2024 Synthetix AI. Enterprise Intelligence Platforms.
        </p>
      </footer>
    </div>
  );
};

export default RegisterPage;
