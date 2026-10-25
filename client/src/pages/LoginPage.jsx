import React, { useState } from "react";
import formimg from "../assets/formimg.png";
import { Book, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router";
import api from "../libs/axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  //   Navigate
  const navigate = useNavigate();

  //   Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await api.post("/users/login", {
        email,
        password,
      });
      if (data.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      const errors = error.response?.data?.err;

      if (errors) {
        const fieldErrors = {};

        Object.entries(errors).forEach(([field, details]) => {
          fieldErrors[field] = details.msg;
        });

        setError(fieldErrors);
      }
      setLoading(false);
    }
  };
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

          <form onSubmit={handleLogin} className="space-y-5">
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
                  setError((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="alex@booknest"
                className={`w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border transition-colors outline-none focus:ring-0 ${
                  error.email
                    ? "border-error text-error-ink focus:border-error"
                    : "border-border-strong focus:border-primary"
                }`}
              />
              {error.email && (
                <div className="flex items-center gap-1.5 mt-2 text-error text-caption">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error.email}</span>
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError((prev) => ({ ...prev, password: "" }));
                  }}
                  placeholder="••••••••"
                  className={`w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border border-border-strong focus:border-primary transition-colors outline-none focus:ring-0 ${
                    error.password
                      ? "border-error text-error-ink focus:border-error"
                      : "border-border-strong focus:border-primary"
                  }`}
                />
                {error.password && (
                  <div className="flex items-center gap-1.5 mt-2 text-error text-caption">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error.password}</span>
                  </div>
                )}
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
            New to BookNest?{" "}
            <Link
              to={"/register"}
              className="font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Create an account
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

export default LoginPage;
