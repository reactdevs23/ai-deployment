import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

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
import DeploymentDetailsLayout from "./Layout/DeploymentDetailsLayout/DeploymentDetailsLayout";
import Api from "./pages/DeploymentDetails/Api/Api";
import SetupLogs from "./pages/DeploymentDetails/SetupLogs/SetupLogs";
import Settings from "./pages/DeploymentDetails/Settings/Settings";
import Playground from "./pages/Playground/Playground";

function App() {
  // Example Authentication State
  const isAuthenticated = true;

  return (
    <Routes>
      {/* Main Layout */}

      <Route
        path="/"
        element={<MainLayout isAuthenticated={isAuthenticated} />}
      >
        {/* Landing pages */}
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="playground" element={<Playground />} />
          <Route element={<SidebarLayout />}>
            <Route path="dashboard/" element={<Dashboard />} />
            <Route path="models" element={<ModelsPage />} />
            <Route path="deployments" element={<DeploymentPage />} />
            <Route path="deployments-list" element={<DeploymentsListPage />} />
            <Route
              path="create-deployment"
              element={<CreateDeploymentPage />}
            />{" "}
          </Route>

          <Route element={<SidebarLayout noPadding />}>
            <Route
              path="/deployment-details/"
              element={<DeploymentDetailsLayout />}
            >
              <Route path="api" element={<Api />} />
              <Route path="setup-logs" element={<SetupLogs />} />
              <Route path="settings" element={<Settings />} />
            </Route>
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
