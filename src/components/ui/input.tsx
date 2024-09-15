import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ring?: boolean;
  icon?: LucideIcon;
  iconClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, ring = true, icon: Icon, iconClassName, ...props },
    ref
  ) => {
    return (
      <div className="relative flex items-center w-full">
        {Icon && (
          <Icon
            size={"0.8rem"}
            className={cn("absolute left-0 ms-3 text-gray-500", iconClassName)}
          />
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 placeholder:dark:bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-500",
            ring && "focus-visible:ring-2 focus-visible:ring-ring/70",
            Icon && "pl-8",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
