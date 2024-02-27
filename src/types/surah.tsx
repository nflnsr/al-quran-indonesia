import { SurahDetail } from "./surah-detail";

export type SurahAyah = {
  id: number;
  surah_id: number;
  ayah: number;
  page: number;
  quarter_hizb: string | number | null;
  juz: number;
  manzil: number;
  arabic: string;
  kitabah: string;
  latin: string;
  arabic_words: string[];
  translation: string;
  footnotes: string | null;
  updated_at: Date;
  surah: SurahDetail;
};
