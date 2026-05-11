"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!username.trim()) e.username = "Username is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6)
      e.password = "Password must be at least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Signed in successfully");
      // clear form or navigate as needed
    }, 900);
  }

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <section className="w-full max-w-md bg-gradient-to-b from-slate-800/60 to-slate-900 ring-1 ring-slate-800 rounded-2xl p-8 space-y-6 text-slate-100 shadow-lg">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Hey, Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to your account — dark-first, responsive and accessible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="username" className="text-sm font-medium sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(v) => setUsername(v.target.value)}
              placeholder="Username"
              className={`w-full bg-slate-800 border ${errors.username ? "border-rose-600" : "border-slate-700"} placeholder-slate-500 text-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              aria-invalid={!!errors.username}
              aria-describedby={errors.username ? "username-error" : undefined}
            />
            {errors.username && (
              <p
                id="username-error"
                className="mt-1 text-sm text-rose-400"
                role="alert"
              >
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(v) => setEmail(v.target.value)}
              placeholder="Email"
              className={`w-full bg-slate-800 border ${errors.email ? "border-rose-600" : "border-slate-700"} placeholder-slate-500 text-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-rose-400"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-sm font-medium sr-only">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(v) => setPassword(v.target.value)}
              placeholder="Password"
              className={`w-full bg-slate-800 border ${errors.password ? "border-rose-600" : "border-slate-700"} placeholder-slate-500 text-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 p-1 rounded-md hover:bg-slate-800"
              aria-pressed={showPassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3-11-7 1.04-2.14 2.76-3.88 4.8-5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 3l18 18"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.5 12s3.5-7.5 9.5-7.5S21.5 12 21.5 12s-3.5 7.5-9.5 7.5S2.5 12 2.5 12z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
              )}
            </button>

            {errors.password && (
              <p
                id="password-error"
                className="mt-1 text-sm text-rose-400"
                role="alert"
              >
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-3 transition disabled:opacity-60 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="w-5 h-5 animate-spin text-slate-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M21 12a9 9 0 11-18 0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : null}
              <span>{loading ? "Signing in..." : "Sign in"}</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <a href="#" className="hover:text-slate-200">
              Forgot password?
            </a>
            <a href="/register" className="hover:text-slate-200">
              Create account
            </a>
          </div>

          {success && (
            <div
              className="mt-1 text-sm text-emerald-300"
              role="status"
              aria-live="polite"
            >
              {success}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
