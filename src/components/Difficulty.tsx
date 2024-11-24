import { cva, VariantProps } from "class-variance-authority";

import { Badge, BadgeProps } from "./ui/badge";

import { cn } from "@/lib/utils";

const variants = cva(
  `
    bg-tabset-header
    hover:bg-tabset-header/50
  `,
  { variants: { type: { easy: `text-teal-500` } }, defaultVariants: { type: "easy" } },
);

type Props = Omit<BadgeProps, "variant"> & VariantProps<typeof variants>;

export const Difficulty = ({ className, ...delegated }: Props) => {
  return <Badge variant="default" {...delegated} className={cn(variants(), className)} />;
};
