"use client";

import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext } from "react";
import { useQuery } from "react-query";
import axios from "@/lib/axios";
import { useAuthStore } from "@/state/auth-state";

type AuthContext = {
  isLoading: boolean;
};

const AuthContext = createContext({} as AuthContext);

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const { authenticate } = useAuthStore((state) => state);

  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data, error } = await axios({
        method: "get",
        endpoint: "/auth/me",
        showErrorToast: true,
      });
      if (data) {
        authenticate(data.data!);
      } else if (error) {
        router.replace("/login");
      }
    },
  });
  return (
    <AuthContext.Provider value={{ isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
