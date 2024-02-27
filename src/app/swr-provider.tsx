"use client";
import fetcher from "@/utils/fetcher";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export default function SWRProviders({ children }: { children: ReactNode }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
