"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Loader, LogOut, UserCircle } from "lucide-react";
import NavItem from "./nav-item";
import { useAuthStore } from "@/state/auth-state";
import { useAuthContext } from "@/providers/auth-provider";
import { useMutation } from "react-query";
import axios from "@/lib/axios";
import { toast } from "sonner";

export default function NavActions() {
  const { isAuthenticated, user, logout } = useAuthStore((state) => state);
  const { isLoading } = useAuthContext();
  const logoutMutation = useMutation(async () => {
    const { data } = await axios({ method: "post", endpoint: "/auth/logout" });
    if (data) {
      logout();
      toast.info(data.message);
    }
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
        {isLoading ? (
          <Loader size={"1.1rem"} className="animate-spin" />
        ) : (
          <>
            <UserCircle />
            <p className="capitalize">
              {isAuthenticated
                ? `${user?.firstname} ${user?.lastname}`
                : "Login"}
            </p>
            <ChevronDown size={"1.1rem"} />
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2 py-1">
        {isAuthenticated ? (
          <>
            <DropdownMenuItem>
              <NavItem label="My Profile" href="/admin/manage/categories" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavItem label="Orders" href="" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavItem label="Wishlists" href="" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavItem label="Gift Cards" href="" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavItem label="Rewards" href="" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                disabled={logoutMutation.isLoading}
                className="flex items-center gap-1"
                onClick={() => logoutMutation.mutate()}
              >
                <LogOut size={"0.9rem"} />
                Logout
              </button>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem>
            <NavItem label="New Customer? Sign Up" href="/register" />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
