"use client";

import { useEffect, useState } from "react";
import { useActiveFontReducer } from "@/hooks/useActiveFontReducer";
import { useFontSizeReducer, fontSizes } from "@/hooks/useFontSizeReducer";
import { generateFootnotes } from "@/utils/generateFootnotes";
import { CircleAyah } from "@/app/assets/circle-ayah";
import { SurahAyah } from "@/types/surah";
import { FONT_SIZE_REDUCER_ACTION_TYPE } from "@/types/font-size";
import { ACTIVE_FONT_REDUCER_ACTION_TYPE } from "@/types/active-font";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SurahDetail({ surah }: { surah?: SurahAyah[] }) {
  const { fontSize, dispatch: dispatchFontSize } = useFontSizeReducer();

  const { showDetail, dispatch: dispatchActiveFont } = useActiveFontReducer();

  const [activeFont, setActiveFont] = useState<FONT_SIZE_REDUCER_ACTION_TYPE>(
    FONT_SIZE_REDUCER_ACTION_TYPE.XS,
  );

  useEffect(() => {
    window?.innerWidth > 768
      ? setActiveFont(FONT_SIZE_REDUCER_ACTION_TYPE.BASE)
      : setActiveFont(FONT_SIZE_REDUCER_ACTION_TYPE.SM);
  }, []);

  const increaseSize = () => {
    setActiveFont(fontSizes[fontSizes.indexOf(activeFont) + 1]);
  };

  const decreaseSize = () => {
    setActiveFont(fontSizes[fontSizes.indexOf(activeFont) - 1]);
  };

  const changeMode = (mode: ACTIVE_FONT_REDUCER_ACTION_TYPE) => {
    dispatchActiveFont({ type: mode });
  };

  useEffect(() => {
    dispatchFontSize({ type: activeFont });
  }, [activeFont, dispatchFontSize]);

  return (
    <>
      <div className="mt-4 flex items-center justify-center gap-5">
        <p>Font Size</p>
        <div className="flex justify-center p-2 ring-1 ring-gray-400">
          <button
            onClick={decreaseSize}
            disabled={fontSizes.indexOf(activeFont) - 1 < 0}
            className="my-auto size-10 pb-2.5 text-3xl disabled:cursor-default disabled:opacity-25"
          >
            -
          </button>
          <button
            onClick={increaseSize}
            disabled={fontSizes.indexOf(activeFont) + 1 === fontSizes.length}
            className="my-auto size-10 pb-2.5 text-3xl disabled:cursor-default disabled:opacity-25"
          >
            +
          </button>
        </div>
        <div className="p-4 ring-1 ring-gray-400">
          <Popover>
            <PopoverTrigger>Mode</PopoverTrigger>
            <PopoverContent className="w-[160px] space-y-4">
              <div className="flex items-center gap-3">
                <Switch
                  checked={showDetail.translation}
                  onCheckedChange={() =>
                    changeMode(ACTIVE_FONT_REDUCER_ACTION_TYPE.TRANSLATION)
                  }
                />
                <Label htmlFor="">Translation</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch
                  checked={showDetail.latin}
                  onCheckedChange={() =>
                    changeMode(ACTIVE_FONT_REDUCER_ACTION_TYPE.LATIN)
                  }
                />
                <Label htmlFor="">Latin</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch
                  checked={showDetail.footnotes}
                  onCheckedChange={() =>
                    changeMode(ACTIVE_FONT_REDUCER_ACTION_TYPE.FOOTNOTES)
                  }
                />
                <Label htmlFor="">Footnotes</Label>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div data-item="surah-ayah-container" className="space-y-5">
        {surah?.map((surah: SurahAyah) => (
          <div key={surah.id} className="mt-8 min-w-fit">
            <p
              dir="rtl"
              // lang="ar"
              // role="presentation"
              className={`my-auto min-w-fit space-x-5 pl-8 text-right font-LPMQ leading-[5rem] text-lime-900 ${fontSize?.arabic} ${fontSize?.distance}`}
            >
              {surah.arabic}
              <span className="inline-block font-serif">
                <CircleAyah
                  className={`inline ${fontSize?.circleAyah} ${fontSize?.ayah}`}
                  fontPositionX="50%"
                  fontPositionY="55%"
                >
                  {surah.ayah.toLocaleString("ar-SA")}
                </CircleAyah>
              </span>
            </p>
            <p
              className={`py-4 font-serif text-lime-900 text-opacity-70 ${fontSize?.latin} ${!showDetail.latin && "hidden"}`}
            >
              {surah.latin}
            </p>
            <p
              className={`font-light text-lime-950 ${fontSize?.translation} ${!showDetail.translation && "hidden"}`}
            >
              {surah.ayah}.{" "}
              {generateFootnotes(surah.translation, { isTranslation: true })}
            </p>
            {surah.footnotes && (
              <div
                className={`mt-4 font-sans text-lime-900 ${fontSize?.footnotes} ${!showDetail.footnotes && "hidden"}`}
              >
                <span className="block font-semibold text-red-500">
                  Catatan Surah
                </span>
                {generateFootnotes(surah.footnotes, { isFootnotes: true })}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
