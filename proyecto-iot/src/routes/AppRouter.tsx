import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/sidebar";
import Dashboard from "../components/Dashboard";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Sidebar />
            <Dashboard />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRouter;