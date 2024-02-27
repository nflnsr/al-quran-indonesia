"use client";
import useSWR from "swr";

export const useSurahList = () => {
  const { data, isLoading, error } = useSWR("/quran-surah");

  return { data, isLoading, error };
};

// export const useSurahDetail = ({
//   start,
//   to,
//   id,
// }: {
//   start: string;
//   to: string;
//   id: string;
// }) => {
//   const { data, isLoading, error } = useSWR(
//     `/quran-ayah?start=${Number(start) - 1}&limit=${to}&surah=${id}`,
//   );

//   return { data, isLoading, error };
// };