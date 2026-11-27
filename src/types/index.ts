export type UserRole = 'patient' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  fullName: string;
}

export type ReadinessStatus = 'READY' | 'ACTION_REQUIRED' | 'PENDING';
export type ResourceStatus = 'OPERATIONAL' | 'MAINTENANCE' | 'UNAVAILABLE';
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface ReadinessEvaluation {
  status: ReadinessStatus;
  score?: number;
  blockers: string[];
  recommendedActions: string[];
  lastCalculatedAt: string;
}

export interface HospitalVisit {
  id: string;
  patientId: string;
  department: string;
  appointmentDate: string;
  appointmentTime: string;
  doctorName: string;
  purpose: string;
  readinessStatus: ReadinessStatus;
  diagnosticRequirements: string[];
  medicineRequirements: string[];
  requiredDocuments: string[];
  createdAt: string;
  updatedAt: string;
}

export interface HospitalResource {
  id: string;
  name: string;
  category: 'DIAGNOSTIC' | 'MEDICINE' | 'FACILITY' | 'EQUIPMENT';
  status: ResourceStatus;
  location: string;
  lastUpdated: string;
  notes?: string;
}

export interface PatientNotification {
  id: string;
  userId: string;
  visitId?: string;
  title: string;
  message: string;
  priority: NotificationPriority;
  read: boolean;
  createdAt: string;
}
