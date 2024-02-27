import { useReducer } from "react";
import {
  FontSize,
  FontSizeReducerAction,
  FONT_SIZE_REDUCER_ACTION_TYPE,
} from "@/types/font-size";

function fontSizeReducer(
  state: FontSize,
  action: FontSizeReducerAction,
): FontSize {
  switch (action.type) {
    case FONT_SIZE_REDUCER_ACTION_TYPE.XS:
      return {
        arabic: "text-2xl",
        ayah: "text-[40px]",
        circleAyah: "max-h-10 max-w-10",
        latin: "text-sm",
        translation: "text-sm ",
        footnotes: "text-xs",
        distance: "leading-[53px]",
      };
    case FONT_SIZE_REDUCER_ACTION_TYPE.SM:
      return {
        arabic: "text-3xl",
        ayah: "text-[40px]",
        circleAyah: "max-h-12 max-w-12",
        latin: "text-base",
        translation: "text-base",
        footnotes: "text-sm ",
        distance: "leading-[3.5rem]",
      };
    case FONT_SIZE_REDUCER_ACTION_TYPE.BASE:
      return initFontSize;
    case FONT_SIZE_REDUCER_ACTION_TYPE.LG:
      return {
        arabic: "text-5xl",
        ayah: "text-[40px]",
        circleAyah: "max-h-16 max-w-16",
        latin: "text-xl",
        translation: "text-xl",
        footnotes: "text-lg",
        distance: "leading-[6.5rem]",
      };
    default:
      return state;
  }
}

const initFontSize: FontSize = {
  arabic: "text-4xl",
  ayah: "text-[40px]",
  circleAyah: "max-h-14 max-w-14",
  latin: "text-lg",
  translation: "text-lg",
  footnotes: "text-base",
  distance: "leading-[4rem]",
};

export const fontSizes: FONT_SIZE_REDUCER_ACTION_TYPE[] = [
  FONT_SIZE_REDUCER_ACTION_TYPE.XS,
  FONT_SIZE_REDUCER_ACTION_TYPE.SM,
  FONT_SIZE_REDUCER_ACTION_TYPE.BASE,
  FONT_SIZE_REDUCER_ACTION_TYPE.LG,
];

export function useFontSizeReducer() {
  const [fontSize, dispatch] = useReducer(fontSizeReducer, initFontSize);

  return { fontSize, dispatch };
}
