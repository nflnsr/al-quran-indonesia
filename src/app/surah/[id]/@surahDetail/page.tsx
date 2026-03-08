import SurahDetail from "../_components/surah-detail";
import { fetchSurahDetail } from "@/actions/server";

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