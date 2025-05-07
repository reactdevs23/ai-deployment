import { Route, Routes, useLocation } from "react-router-dom";
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
import NotFound from "./components/common/NotFound/NotFound";
import PricingPage from "./pages/PricingPage/PricingPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogDetails from "./pages/BlogPage/BlogDetails/BlogDetails";
import SupportPage from "./pages/SupportPage/SupportPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import FaqsPage from "./pages/FaqsPage/FaqsPage";
import ReleasesPage from "./pages/ReleasesPage/ReleasesPage";
import PrivacyAndTOSLayout from "./Layout/PrivacyAndTOSLayout/PrivacyAndTOSLayout";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import Documentaton from "./pages/Documentation/Documentaton";

function App() {
  // Example Authentication State
  const isAuthenticated = true;
  const { pathname } = useLocation();
  const routeLayoutMap = {
    "/create-deployment": { cancelDeployment: true },
    "/deployments": { createDeployment: true },
  };
  const layoutProps =
    routeLayoutMap[pathname] ||
    (pathname.startsWith("/deployment-details") ? { noPadding: true } : {});
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
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<Documentaton />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/releases" element={<ReleasesPage />} />

          <Route path="/" element={<PrivacyAndTOSLayout />}>
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
          </Route>
        </Route>

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="playground" element={<Playground />} />
          <Route element={<SidebarLayout {...layoutProps} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="models" element={<ModelsPage />} />
            <Route path="deployments" element={<DeploymentPage />} />
            <Route path="deployments-list" element={<DeploymentsListPage />} />
            <Route
              path="create-deployment"
              element={<CreateDeploymentPage />}
            />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
