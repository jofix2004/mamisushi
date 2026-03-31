import aburiSalmon from "@/asses/Aburi_Salmon_Sushi.webp";
import amaebi from "@/asses/Amaebi_Sushi.webp";
import anago from "@/asses/Anago_Sushi.webp";
import avocado from "@/asses/Avocado_Sushi.webp";
import california from "@/asses/California_Sushi.webp";
import crabStickNigiri from "@/asses/Crab_Stick_Nigiri.webp";
import ebiNigiri from "@/asses/Ebi_Nigiri.webp";
import hamachi from "@/asses/Hamachi_Sushi.webp";
import hokkigai from "@/asses/Hokkigai_Sushi.webp";
import hotate from "@/asses/Hotate_Sushi.webp";
import ika from "@/asses/Ika_Sushi.webp";
import ikura from "@/asses/Ikura_Sushi.webp";
import inari from "@/asses/Inari_Sushi.webp";
import iwashi from "@/asses/Iwashi_Sushi.webp";
import kani from "@/asses/Kani_Sushi.webp";
import kappaMaki from "@/asses/Kappa_Maki_Sushi.webp";
import maguro from "@/asses/Maguro_Sushi.webp";
import maki from "@/asses/Maki_Sushi.webp";
import natto from "@/asses/Natto_Sushi.webp";
import negitoro from "@/asses/Negitoro_Sushi.webp";
import nigiri from "@/asses/Nigiri_Sushi.webp";
import roeSalmon from "@/asses/Roe_Salmon_Sushi.webp";
import saba from "@/asses/Saba_Sushi.webp";
import salmonIkura from "@/asses/Salmon_Ikura_Sushi.webp";
import tako from "@/asses/Tako_Sushi.webp";
import tamago from "@/asses/Tamago_Sushi.webp";
import tunaNigiri from "@/asses/Tuna_Nigiri_Sushi.webp";
import unagi from "@/asses/Unagi_Sushi.webp";
import uni from "@/asses/Uni_Sushi.webp";

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
