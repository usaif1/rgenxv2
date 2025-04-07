// dependencies
import React from "react";
import { Routes, Route, Navigate } from "react-router";

// layouts
import HomeLayout from "@/modules/home/layout/HomeLayout";

// screens
import { Dashboard } from "@/modules/home/screens";
import { SelectCategory } from "@/modules/vfc/screens";
import _404Page from "@/components/NotFound/NotFound";

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="vcf" element={<SelectCategory />} />
      </Route>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<_404Page />} />
    </Routes>
  );
};

export default PrivateRoutes;
