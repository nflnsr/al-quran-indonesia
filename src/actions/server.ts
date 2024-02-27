type FetchSurahDetailProps = {
  params: { id: string };
  searchParams: { start: string; to: string };
};

export async function fetchSurahDetail({
  params,
  searchParams,
}: FetchSurahDetailProps) {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/quran-ayah?start=${Number(searchParams.start) - 1}&limit=${searchParams.to}&surah=${params.id}`;
  const response = await fetch(url);
  const result = await response.json();

  return result.data;
}
