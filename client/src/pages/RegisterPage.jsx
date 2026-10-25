import React, { useState } from "react";
import formimg from "../assets/formimg.png";
import { Book, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Link } from "react-router";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen w-full bg-background flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-24 bg-background">
        {/* Top Logo Header */}
        <div className="flex items-center gap-3 cursor-pointer mb-12 md:mb-0">
          <div className="w-10 h-10 rounded-tile bg-primary text-surface flex items-center justify-center shadow-button">
            <Book className="w-5 h-5" />
          </div>
          <span className="font-display text-2xl text-ink">BookNest</span>
        </div>

        {/* Form Container */}
        <div className="max-w-md w-full mx-auto my-auto">
          {/* Form Heading */}
          <h1 className="font-display text-4xl lg:text-5xl text-ink mb-3">
            Welcome back
          </h1>
          <p className="text-muted text-ui mb-8">
            Log in to pick up where you left off.
          </p>

          <form className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-ui font-medium text-ink mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="alex"
                className={`w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border transition-colors outline-none focus:ring-0 ${
                  nameError
                    ? "border-error text-error-ink focus:border-error"
                    : "border-border-strong focus:border-primary"
                }`}
              />
              {nameError && (
                <div className="flex items-center gap-1.5 mt-2 text-error text-caption">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{nameError}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-ui font-medium text-ink mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="alex@booknest"
                className={`w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border transition-colors outline-none focus:ring-0 ${
                  emailError
                    ? "border-error text-error-ink focus:border-error"
                    : "border-border-strong focus:border-primary"
                }`}
              />
              {emailError && (
                <div className="flex items-center gap-1.5 mt-2 text-error text-caption">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{emailError}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-ui font-medium text-ink mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border border-border-strong focus:border-primary transition-colors outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-surface text-ui font-medium py-3.5 rounded-control transition-colors shadow-button mt-4"
            >
              Log In
            </button>
          </form>

          {/* Create an Account Link */}
          <div className="text-center mt-8 text-ui text-muted">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Spacer for bottom layout alignment */}
        <div className="hidden md:block" />
      </div>

      {/* Right Column - Image Side */}
      <div className="w-full md:w-1/2 bg-[#e8eee9] flex items-center justify-center p-8 min-h-100 md:min-h-screen">
        <img
          src={formimg}
          alt="BookNest preview"
          className="max-w-md w-full h-auto object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
