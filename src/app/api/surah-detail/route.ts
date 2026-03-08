export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const start = searchParams.get("start");
  const limit = searchParams.get("limit");
  const surah = searchParams.get("surah");

  const apiUrl = `https://web-api.qurankemenag.net/quran-ayah?start=${start}&limit=${limit}&surah=${surah}`;

  const res = await fetch(apiUrl, {
    headers: {
      Origin: "https://quran.kemenag.go.id",
      Referer: "https://quran.kemenag.go.id/",
      "User-Agent": "Mozilla/5.0",
    },
  });

  const data = await res.json();
  return Response.json(data);
}