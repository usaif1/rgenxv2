// dependencies
import React from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { ButtonPrimary } from "@/components";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginCard: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit", // or "onBlur"/"onChange" if desired
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form data", data);
    navigate("/signup");
    // handle your login logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white p-10 rounded-lg shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Log in</h2>
        <p className="text-gray-600">Welcome back to RgenX</p>
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-3 border rounded-md mb-4"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-3">{errors.email.message}</p>
        )}

        <label className="block mb-2 font-medium">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-3 border rounded-md mb-4"
          placeholder="********"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-3">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-primary text-sm">
          Forgot password?
        </Link>
      </div>

      <ButtonPrimary type="submit">Sign in</ButtonPrimary>

      <p className="text-center text-text-accent mt-6">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-primary font-semibold">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginCard;
