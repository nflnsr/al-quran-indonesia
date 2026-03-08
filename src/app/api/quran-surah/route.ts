export async function GET() {
  const res = await fetch("https://web-api.qurankemenag.net/quran-surah", {
    headers: {
      Origin: "https://quran.kemenag.go.id",
      Referer: "https://quran.kemenag.go.id/",
      "User-Agent": "Mozilla/5.0",
    },
    cache: "no-store",
  });

  const data = await res.json();

  return Response.json(data);
}