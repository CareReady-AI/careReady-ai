import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import { PatientLayout } from '../layouts/PatientLayout';
import { AdminLayout } from '../layouts/AdminLayout';

import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { PatientDashboardPage } from '../pages/patient/PatientDashboardPage';
import { PatientVisitsPage } from '../pages/patient/PatientVisitsPage';
import { PatientNotificationsPage } from '../pages/patient/PatientNotificationsPage';
import { PatientAiAssistantPage } from '../pages/patient/PatientAiAssistantPage';

import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { AdminResourcesPage } from '../pages/admin/AdminResourcesPage';
import { AdminAppointmentsPage } from '../pages/admin/AdminAppointmentsPage';

import { UnauthorizedPage } from '../pages/errors/UnauthorizedPage';
import { NotFoundPage } from '../pages/errors/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Patient Routes */}
      <Route
        path="/patient"
        element={
          <ProtectedRoute allowedRole="patient">
            <PatientLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/patient/dashboard" replace />} />
        <Route path="dashboard" element={<PatientDashboardPage />} />
        <Route path="visits" element={<PatientVisitsPage />} />
        <Route path="notifications" element={<PatientNotificationsPage />} />
        <Route path="ai-assistant" element={<PatientAiAssistantPage />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="resources" element={<AdminResourcesPage />} />
        <Route path="appointments" element={<AdminAppointmentsPage />} />
      </Route>

      {/* Error Routes */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};
