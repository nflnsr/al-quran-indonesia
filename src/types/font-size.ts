export type FontSize = {
  arabic: string;
  ayah: string;
  circleAyah: string;
  latin: string;
  translation: string;
  footnotes: string;
  distance: string;
};

export const enum FONT_SIZE_REDUCER_ACTION_TYPE {
  XS = "xs",
  SM = "sm",
  BASE = "base",
  LG = "lg",
}

export type FontSizeReducerAction = {
  type: FONT_SIZE_REDUCER_ACTION_TYPE;
  payload?: {
    arabic: string;
    ayah: string;
    circleAyah: string;
    latin: string;
    translation: string;
    footnotes: string;
    distance: string;
  };
};
