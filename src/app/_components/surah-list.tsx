"use client";

import React, { useState, useEffect } from "react";
import { SurahDetail } from "@/types/surah-detail";
import Link from "next/link";
import { CircleAyah } from "../assets/circle-ayah";

import { useSurahList } from "@/actions/client";
import { useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
// import Tiktok from "./tiktok";

// async function fetchSurahList() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_API_URL}/quran-surah`,
//   );
//   const data = await response.json();
//   return data;
// }

export default function SurahList() {
  // fetch server
  // await new Promise((res) => setTimeout(res, 1000))
  // const data = await fetchSurahList();

  // useSWR
  const { data, isLoading, error } = useSurahList();
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const [searchResult, setSearchResult] = useState([]);

  const searchQuery = useDebounce(search, 100);

  useEffect(() => {
    if (searchQuery) {
      const result = data?.data.filter(
        (surah: SurahDetail) =>
          surah.latin.toLowerCase().includes(searchQuery.toLowerCase()) ||
          surah.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
          surah.transliteration
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
      );
      setSearchResult(result);
    } else {
      setSearchResult(data?.data);
    }
  }, [searchQuery, data]);

  if (isLoading)
    return (
      <div className="relative min-h-[calc(100vh-var(--header-height)-var(--search-height)-var(--footer-height))] text-center leading-none">
        <p className="pt-36">Loading...</p>
      </div>
    );
  if (error) return <div className="text-center">Failed to load</div>;

  return (
    <div>
      <div className="block h-0.5 w-full bg-lime-800" />
      <p className="py-4 text-center">
        Total Surah:
        <span data-item="total-surah">{searchResult?.length}</span>
      </p>
      <div
        data-item="surah-card-container"
        className="grid gap-x-5 gap-y-2 py-2 sm:grid-cols-2 lg:grid-cols-3"
      >
        {searchResult !== undefined &&
          searchResult?.map((surah: SurahDetail) => (
            <div data-item="surah-card" key={surah.id}>
              <Link
                // href={`/quran-ayah?start=0&limit=${surah.num_ayah}&surah=1`}
                href={`/surah/${surah.id}?start=1&to=${surah.num_ayah}`}
              >
                <div className="flex items-center border bg-zinc-50 px-5 py-4 hover:bg-white hover:ring-1 hover:ring-zinc-300 sm:px-2 md:px-5">
                  <div className="flex items-center justify-center rounded-full">
                    <CircleAyah
                      className={`max-h-10 max-w-10 ${String(surah.id).length > 2 ? "text-[30px]" : "text-[33px]"}`}
                      fontPositionX="50%"
                      fontPositionY="51.5%"
                    >
                      {surah.id}
                    </CircleAyah>
                  </div>
                  <div className="pl-1.5">
                    <div className="line-clamp-1 text-sm font-semibold text-lime-900">
                      <p>
                        {surah.latin} &#40;{surah.translation}&#41;
                      </p>
                    </div>
                    <div className=" flex text-[0.85rem] text-lime-800">
                      <p className="line-clamp-1">
                        {surah.location}&nbsp;
                        <span className="my-auto inline-flex size-1 -translate-y-1/2 place-self-center rounded-full bg-gray-500"></span>
                        &nbsp;
                        {surah.num_ayah} Ayat
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <p
                      className="line-clamp-1 text-right font-LPMQ text-lime-900"
                      dir="rtl"
                    >
                      {surah.arabic}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      {/* <Tiktok /> */}
    </div>
  );
}
