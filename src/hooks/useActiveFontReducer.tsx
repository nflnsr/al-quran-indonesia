import { useReducer } from "react";
import { ActiveFont, ActiveFontReducerAction } from "@/types/active-font";

function showDetailReducer(
  state: ActiveFont,
  action: ActiveFontReducerAction,
): ActiveFont {
  switch (action.type) {
    case "translation":
      return {
        ...state,
        translation: !state.translation,
      };
    case "latin":
      return {
        ...state,
        latin: !state.latin,
      };
    case "footnotes":
      return {
        ...state,
        footnotes: !state.footnotes,
      };
    default:
      return state;
  }
}

const initShowDetail: ActiveFont = {
  translation: true,
  latin: true,
  footnotes: true,
};

export function useActiveFontReducer() {
  const [showDetail, dispatch] = useReducer(showDetailReducer, initShowDetail);

  return { showDetail, dispatch };
}
