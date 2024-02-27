export default function Layoutt({
  // children,
  surahDetail,
}: {
  // children: React.ReactNode;
  surahDetail: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-screen-lg space-y-0 px-3">
      {surahDetail}
    </main>
  );
}
