import React from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ButtonPrimary } from "@/components";

// Validation schema
const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const SignupCard: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex items-center justify-center"
    >
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-sm">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-text-secondary font-medium">
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-text-secondary font-medium">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-text-secondary font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-text-secondary font-medium">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="w-full p-3 border rounded-md"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-text-secondary font-medium">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="w-full p-3 border rounded-md"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            {...register("terms")}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <Link to="/" className="text-primary font-semibold">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/" className="text-primary font-semibold">
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-xs mb-3 -mt-4">
            {errors.terms.message}
          </p>
        )}

        <ButtonPrimary type="submit">Create Account</ButtonPrimary>

        <p className="text-center text-text-accent mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupCard;
