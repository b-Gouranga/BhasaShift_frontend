"use client";

import { ReactNode, createContext, useContext } from "react";

// Dummy auth context (replace with real logic later)
const DashboardAuthContext = createContext({ isAuthenticated: true });

export function DashboardAuthProvider({ children }: { children: ReactNode }) {
  // Here you could check cookies, session, etc.
  // For now, always authenticated
  return (
    <DashboardAuthContext.Provider value={{ isAuthenticated: true }}>
      {children}
    </DashboardAuthContext.Provider>
  );
}

export function useDashboardAuth() {
  return useContext(DashboardAuthContext);
}
