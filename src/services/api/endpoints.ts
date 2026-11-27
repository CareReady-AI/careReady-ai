import { apiClient } from './client';
import type { HospitalVisit, HospitalResource, PatientNotification, ReadinessEvaluation } from '../../types';

export const patientApi = {
  getDashboard: () => apiClient.get<{ activeVisitsCount: number; unreadAlertsCount: number; readinessSummary: string }>('/patient/dashboard'),
  getVisits: () => apiClient.get<HospitalVisit[]>('/patient/visits'),
  getVisitById: (id: string) => apiClient.get<HospitalVisit>(`/patient/visits/${id}`),
  createVisitPlan: (data: Partial<HospitalVisit>) => apiClient.post<HospitalVisit>('/patient/visits', data),
  getNotifications: () => apiClient.get<PatientNotification[]>('/patient/notifications'),
  markNotificationAsRead: (id: string) => apiClient.patch<{ success: boolean }>(`/patient/notifications/${id}/read`),
  askAssistant: (query: string, visitId?: string) => apiClient.post<{ answer: string; citations?: string[] }>('/patient/ai-assistant', { query, visitId }),
};

export const adminApi = {
  getDashboard: () => apiClient.get<{ totalResources: number; maintenanceCount: number; pendingVisits: number }>('/admin/dashboard'),
  getResources: () => apiClient.get<HospitalResource[]>('/admin/resources'),
  updateResourceStatus: (resourceId: string, status: string, notes?: string) =>
    apiClient.patch<HospitalResource>(`/admin/resources/${resourceId}`, { status, notes }),
  getAppointments: () => apiClient.get<HospitalVisit[]>('/admin/appointments'),
};

export const readinessApi = {
  getVisitReadiness: (visitId: string) => apiClient.get<ReadinessEvaluation>(`/visits/${visitId}/readiness`),
  getBlockers: (visitId: string) => apiClient.get<string[]>(`/visits/${visitId}/blockers`),
  getRecommendedActions: (visitId: string) => apiClient.get<string[]>(`/visits/${visitId}/recommendations`),
};
