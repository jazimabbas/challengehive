import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  `
    inline-flex items-center gap-1 rounded-full border bg-tabset-header px-2.5 py-0.5 text-xs font-semibold
    text-foreground transition-colors
    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
  `,
  {
    variants: {
      variant: {
        default: `
          border-transparent text-foreground
          hover:bg-tabset-header/50
        `,
        secondary: `
          border-transparent text-secondary-foreground
          hover:bg-secondary/80
        `,
        destructive: `
          border-transparent text-destructive-foreground
          hover:bg-destructive/80
        `,
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
