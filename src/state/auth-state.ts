import { User } from "@/types";
import { create } from "zustand";

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  authenticate: (userData: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  authenticate: (userData: User) => {
    set({
      user: userData,
      isAuthenticated: true,
    });
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));
