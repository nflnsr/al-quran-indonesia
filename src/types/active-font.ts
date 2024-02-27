export type ActiveFont = {
  translation: boolean;
  latin: boolean;
  footnotes: boolean;
};

export const enum ACTIVE_FONT_REDUCER_ACTION_TYPE {
  TRANSLATION = "translation",
  LATIN = "latin",
  FOOTNOTES = "footnotes",
}

export type ActiveFontReducerAction = {
  type: ACTIVE_FONT_REDUCER_ACTION_TYPE;
};
