import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import type { ReactNode } from "react";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
