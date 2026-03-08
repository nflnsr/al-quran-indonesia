import { headers } from "next/headers";

type FetchSurahDetailProps = {
  params: { id: string };
  searchParams: { start: string; to: string };
};

export async function fetchSurahDetail({
  params,
  searchParams,
}: FetchSurahDetailProps) {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const url = `${protocol}://${host}/api/surah-detail?start=${
    Number(searchParams.start) - 1
  }&limit=${searchParams.to}&surah=${params.id}`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  const result = await response.json();
  return result.data;
}
