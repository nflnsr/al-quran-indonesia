export function generateFootnotes(
  value: string | null,
  {
    isTranslation = false,
    isFootnotes = false,
  }: { isTranslation?: boolean; isFootnotes?: boolean },
) {
  return (
    <>
      {value?.split(/(\d+\))/).map((val, i) => {
        if (val.match(/\d+\)/g)) {
          return (
            <sup key={i} className="text-[0.7rem] text-red-500">
              {val}
            </sup>
          );
        }
        if (isTranslation) return val;
        if (isFootnotes)
          return (
            <span key={i} className="whitespace-pre-line">
              {val}
            </span>
          );
      })}
    </>
  );
}
