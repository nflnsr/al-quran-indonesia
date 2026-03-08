"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header
      data-item="navbar"
      className="flex h-[var(--header-height)] w-full items-center bg-zinc-200 text-center"
    >
      {pathname !== "/" && (
        <Link href="/" className="absolute left-1.5 min-[350px]:left-6 text-lime-800">
          <button className="flex">
            <ChevronLeft />
            <span className="hidden min-[420px]:block">Back</span>
          </button>
        </Link>
      )}
      <h1
        data-item="title"
        className="mx-auto text-2xl font-bold text-lime-800 sm:text-3xl"
      >
        Al-Qur&apos;an Indonesia
      </h1>
    </header>
  );
}
