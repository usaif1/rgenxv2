// dependencies
import React from "react";
import { Routes, Route, Navigate } from "react-router";

// layout
import AuthLayout from "@/modules/auth/layouts/AuthLayout";

// screens
import { Login, Signup } from "@/modules/auth/screens";

const UnProtectedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default UnProtectedRoutes;
