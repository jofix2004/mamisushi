import sushi01 from "@/asses/1.png";
import sushi02 from "@/asses/2.png";
import sushi03 from "@/asses/3.png";
import sushi04 from "@/asses/4.png";
import sushi05 from "@/asses/5.png";
import sushi06 from "@/asses/6.png";
import sushi07 from "@/asses/7.png";
import sushi08 from "@/asses/8.png";
import sushi09 from "@/asses/9.png";
import sushi10 from "@/asses/10.png";
import sushi11 from "@/asses/11.png";
import sushi12 from "@/asses/12.png";

export const sushiImages = {
  "1": sushi01,
  "2": sushi02,
  "3": sushi03,
  "4": sushi04,
  "5": sushi05,
  "6": sushi06,
  "7": sushi07,
  "8": sushi08,
  "9": sushi09,
  "10": sushi10,
  "11": sushi11,
  "12": sushi12,
} as const;

export type SushiImageId = keyof typeof sushiImages;
