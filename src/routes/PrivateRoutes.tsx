// dependencies
import React from "react";
import { Routes, Route, Navigate } from "react-router";

// layouts
import HomeLayout from "@/modules/home/layout/HomeLayout";

// screens
import { Dashboard } from "@/modules/home/screens";
import { Analyse, NewPatient } from "@/modules/patient/screens";
import _404Page from "@/components/NotFound/NotFound";

import Cases from "@/modules/myCases/screen/Cases";

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="analyse">
          <Route index element={<Analyse />} />
          <Route path="new" element={<NewPatient />} />
        </Route>
        <Route path="cases" element={<Cases />} />
      </Route>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<_404Page />} />
    </Routes>
  );
};

export default PrivateRoutes;
