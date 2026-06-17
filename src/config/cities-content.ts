// Aggregates the per-city CityPageConfig files for the /service-areas/<slug> pages.
// Named "cities-content" so it doesn't clash with catalog.ts's `cities` list.
// Order mirrors catalog.ts `cities`.
import type { CityPageConfig } from "@/types";

import havenKs from "./cities/haven-ks";
import hutchinsonKs from "./cities/hutchinson-ks";
import southHutchinsonKs from "./cities/south-hutchinson-ks";
import buhlerKs from "./cities/buhler-ks";
import nickersonKs from "./cities/nickerson-ks";
import yoderKs from "./cities/yoder-ks";
import prettyPrairieKs from "./cities/pretty-prairie-ks";
import partridgeKs from "./cities/partridge-ks";
import arlingtonKs from "./cities/arlington-ks";
import plevnaKs from "./cities/plevna-ks";
import mountHopeKs from "./cities/mount-hope-ks";
import burrtonKs from "./cities/burrton-ks";
import halsteadKs from "./cities/halstead-ks";
import newtonKs from "./cities/newton-ks";
import kingmanKs from "./cities/kingman-ks";
import sterlingKs from "./cities/sterling-ks";
import lyonsKs from "./cities/lyons-ks";
import mcphersonKs from "./cities/mcpherson-ks";
import maizeKs from "./cities/maize-ks";
import wichitaKs from "./cities/wichita-ks";
import prattKs from "./cities/pratt-ks";
import staffordKs from "./cities/stafford-ks";

export const cityConfigs: CityPageConfig[] = [
  havenKs,
  hutchinsonKs,
  southHutchinsonKs,
  buhlerKs,
  nickersonKs,
  yoderKs,
  prettyPrairieKs,
  partridgeKs,
  arlingtonKs,
  plevnaKs,
  mountHopeKs,
  burrtonKs,
  halsteadKs,
  newtonKs,
  kingmanKs,
  sterlingKs,
  lyonsKs,
  mcphersonKs,
  maizeKs,
  wichitaKs,
  prattKs,
  staffordKs,
];

export const cityConfigMap: Record<string, CityPageConfig> = Object.fromEntries(
  cityConfigs.map((c) => [c.slug, c]),
);
