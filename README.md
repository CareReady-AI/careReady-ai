# CareReady AI — Frontend Foundation (Phase 0)

CareReady AI is a proactive hospital visit-readiness platform that helps patients verify whether they are genuinely prepared for a hospital visit before arriving.

## Architecture & Responsibilities
- **Frontend Role**: Visualizes backend-computed readiness, provides clear user journeys for patients and hospital administrators, handles user input and displays real-time disruptions (e.g., equipment maintenance).
- **Backend Role (FastAPI + Supabase)**: Owns authoritative business logic, resource availability, visit readiness calculations, AI orchestration, and notifications. Frontend **never** fabricates readiness scores or resources.

## Technology Stack
- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v4 with custom healthcare palette
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **HTTP Client**: Centralized Fetch API client with Bearer token authentication

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
npm install
```

### Environment Variables
Copy `.env.example` to `.env`:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_ENABLE_MOCK_AUTH=true
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## Route Map
- `/login`: Role-switchable sign-in (Patient / Hospital Admin)
- `/register`: Invitation notice
- `/patient/dashboard`: Patient visit readiness overview
- `/patient/visits`: Upcoming hospital visit plans
- `/patient/notifications`: Resource disruption alerts
- `/patient/ai-assistant`: Visit readiness explanation interface
- `/admin/dashboard`: Hospital operations overview
- `/admin/resources`: Equipment & diagnostic status management
- `/admin/appointments`: Appointment schedule monitor
- `/unauthorized`: Role guard error page
- `/not-found`: 404 handler

## Mock Mode vs Backend Integration
When `VITE_ENABLE_MOCK_AUTH=true`, a development authentication context operates locally with sample patient/admin sessions. Once Developer 2 exposes FastAPI Supabase endpoints, standard Bearer token handoffs are activated via `src/services/api/client.ts`.
