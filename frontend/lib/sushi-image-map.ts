import aburiSalmon from "@/asses/Aburi_Salmon_Sushi.png";
import amaebi from "@/asses/Amaebi_Sushi.png";
import anago from "@/asses/Anago_Sushi.png";
import avocado from "@/asses/Avocado_Sushi.png";
import california from "@/asses/California_Sushi.png";
import crabStickNigiri from "@/asses/Crab_Stick_Nigiri.png";
import ebiNigiri from "@/asses/Ebi_Nigiri.png";
import hamachi from "@/asses/Hamachi_Sushi.png";
import hokkigai from "@/asses/Hokkigai_Sushi.png";
import hotate from "@/asses/Hotate_Sushi.png";
import ika from "@/asses/Ika_Sushi.png";
import ikura from "@/asses/Ikura_Sushi.png";
import inari from "@/asses/Inari_Sushi.png";
import iwashi from "@/asses/Iwashi_Sushi.png";
import kani from "@/asses/Kani_Sushi.png";
import kappaMaki from "@/asses/Kappa_Maki_Sushi.png";
import maguro from "@/asses/Maguro_Sushi.png";
import maki from "@/asses/Maki_Sushi.png";
import natto from "@/asses/Natto_Sushi.png";
import negitoro from "@/asses/Negitoro_Sushi.png";
import nigiri from "@/asses/Nigiri_Sushi.png";
import roeSalmon from "@/asses/Roe_Salmon_Sushi.png";
import saba from "@/asses/Saba_Sushi.png";
import salmonIkura from "@/asses/Salmon_Ikura_Sushi.png";
import tako from "@/asses/Tako_Sushi.png";
import tamago from "@/asses/Tamago_Sushi.png";
import tunaNigiri from "@/asses/Tuna_Nigiri_Sushi.png";
import unagi from "@/asses/Unagi_Sushi.png";
import uni from "@/asses/Uni_Sushi.png";

export const sushiImages = {
  aburiSalmon,
  amaebi,
  anago,
  avocado,
  california,
  crabStickNigiri,
  ebiNigiri,
  hamachi,
  hokkigai,
  hotate,
  ika,
  ikura,
  inari,
  iwashi,
  kani,
  kappaMaki,
  maguro,
  maki,
  natto,
  negitoro,
  nigiri,
  roeSalmon,
  saba,
  salmonIkura,
  tako,
  tamago,
  tunaNigiri,
  unagi,
  uni,
} as const;

export type SushiImageId = keyof typeof sushiImages;
