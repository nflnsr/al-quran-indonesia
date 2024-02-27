"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

export function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSearch = (input: string) => {
    const params = new URLSearchParams();
    console.log(params, "params");
    if (input) {
      params.set("q", input);
    } else {
      params.delete("q");
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="px-5 py-10 h-[var(--search-height)]">
      <Input
        type="search"
        placeholder="search"
        className="mx-auto max-w-96 font-semibold  text-lime-700 ring-0 focus:ring-0 focus-visible:ring-lime-700"
        // value={searchInput}
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
