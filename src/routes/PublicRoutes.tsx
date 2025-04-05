// dependencies
import React from "react";
import { Routes, Route, Navigate } from "react-router";

// layout
import AuthLayout from "@/modules/auth/layouts/AuthLayout";

// screens
import { Login, Signup } from "@/modules/auth/screens";
import _404Page from "@/components/NotFound/NotFound";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<_404Page />} />
    </Routes>
  );
};

export default PublicRoutes;
