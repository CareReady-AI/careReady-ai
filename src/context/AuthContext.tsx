import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, UserRole } from '../types';
import { apiClient } from '../services/api/client';

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  login: (role?: UserRole) => Promise<void>;
  logout: () => void;
  isMockMode: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'careready_auth_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMockMode = import.meta.env.VITE_ENABLE_MOCK_AUTH === 'true';

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed.user);
        setToken(parsed.token);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    apiClient.setTokenProvider(() => token);
  }, [token]);

  const login = async (selectedRole: UserRole = 'patient') => {
    setIsLoading(true);
    try {
      const mockUser: User = {
        id: selectedRole === 'admin' ? 'admin-user-01' : 'patient-user-01',
        email: selectedRole === 'admin' ? 'admin@hospital.org' : 'patient@example.com',
        role: selectedRole,
        fullName: selectedRole === 'admin' ? 'Dr. Sarah Connor (Admin)' : 'Alex Morgan',
      };
      const mockToken = `mock-jwt-token-for-${selectedRole}`;

      setUser(mockUser);
      setToken(mockToken);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: mockUser, token: mockToken }));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || null,
        isAuthenticated: !!user,
        isLoading,
        token,
        login,
        logout,
        isMockMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
