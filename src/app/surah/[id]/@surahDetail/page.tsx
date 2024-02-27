import { Metadata } from "next";
import SurahDetail from "../_components/surah-detail";
import { fetchSurahDetail } from "@/actions/server";

type FetchSurahDetailProps = {
  params: { id: string };
  searchParams: { start: string; to: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: FetchSurahDetailProps): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/quran-ayah?start=${Number(searchParams.start) - 1}&limit=${searchParams.to}&surah=${params.id}`;
  const response = await fetch(url);
  const result = await response.json();
  const title = result?.data[0]?.surah?.transliteration;
  const description = "Surah" + result?.data[0]?.surah?.transliteration;

  return {
    title,
    description,
  };
}

// export const metadata: Metadata = {
//   title: "Surah Detail",
//   description: "Surah Detail",
// };

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { start: string; to: string };
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const surahDetail = await fetchSurahDetail({ params, searchParams });

  return <SurahDetail surah={surahDetail} />;
}
