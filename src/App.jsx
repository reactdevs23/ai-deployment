import { Route, Routes } from "react-router-dom";
import React from "react";

import MainLayout from "@/Layout/MainLayout/MainLayout";
import LandingLayout from "@/Layout/LandingLayout/LandingLayout";
import SidebarLayout from "@/Layout/SidebarLayout/SidebarLayout";
import AuthenticationLayout from "@/Layout/AuthenticationLayout/AuthenticationLayout";

import Home from "@/pages/Home/Home";
import Dashboard from "@/pages/Dashboard/Dashboard";
import SignIn from "@/pages/Authentication/SignIn/SignIn";
import CreateAccount from "@/pages/Authentication/CreateAccount/CreateAccount";

import ProtectedRoute from "@/components/common/ProtectedRoute/ProtectedRoute"; // Adjust import path as needed

import ModelsPage from "./pages/ModelsPage/ModelsPage";
import DeploymentPage from "./pages/DeploymentPage/DeploymentPage";
import DeploymentsListPage from "./pages/DeploymentsListPage/DeploymentsListPage";
import CreateDeploymentPage from "./pages/CreateDeploymentPage/CreateDeploymentPage";

function App() {
  // Example Authentication State
  const isAuthenticated = true;

  return (
    <Routes>
      {/* Main Layout */}
      {/* <Route path="/" element={<CodeBlock />} /> */}
      <Route path="/" element={<MainLayout />}>
        {/* Landing pages */}
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<SidebarLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="models" element={<ModelsPage />} />
            <Route path="deployments" element={<DeploymentPage />} />
            <Route path="/deployments-list" element={<DeploymentsListPage />} />
            <Route
              path="/create-deployment"
              element={<CreateDeploymentPage />}
            />
          </Route>
        </Route>
      </Route>

      {/* Authentication Pages */}
      <Route path="/" element={<AuthenticationLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<CreateAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
