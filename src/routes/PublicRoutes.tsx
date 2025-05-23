// dependencies
import React from "react";
import { Routes, Route, Navigate } from "react-router";

// layout
import AuthLayout from "@/modules/auth/layouts/AuthLayout";

// screens
import { Login, Signup } from "@/modules/auth/screens";
import { Result } from "@/modules/patient/screens";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/result/:filename" element={<Result />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default PublicRoutes;
