// ===== PROPERTY / ANIMAL PAGE CONFIGS =====
// One FenceTypeConfig per slug in catalog.ts `propertyPages`, rendered by
// src/pages/property/[slug].astro. Keep this list in catalog order.

import type { FenceTypeConfig } from "@/types";

import horseFenceInstallation from "./property/horse-fence-installation";
import cattleFenceInstallation from "./property/cattle-fence-installation";
import livestockFenceInstallation from "./property/livestock-fence-installation";
import pastureFenceInstallation from "./property/pasture-fence-installation";
import acreageFenceInstallation from "./property/acreage-fence-installation";
import dogFenceInstallation from "./property/dog-fence-installation";
import backyardFenceInstallation from "./property/backyard-fence-installation";
import poolFenceInstallation from "./property/pool-fence-installation";
import gardenFenceInstallation from "./property/garden-fence-installation";
import farmGateInstallation from "./property/farm-gate-installation";
import ranchEntryGateInstallation from "./property/ranch-entry-gate-installation";

export const propertyConfigs: FenceTypeConfig[] = [
  horseFenceInstallation,
  cattleFenceInstallation,
  livestockFenceInstallation,
  pastureFenceInstallation,
  acreageFenceInstallation,
  dogFenceInstallation,
  backyardFenceInstallation,
  poolFenceInstallation,
  gardenFenceInstallation,
  farmGateInstallation,
  ranchEntryGateInstallation,
];

export const propertyConfigMap: Record<string, FenceTypeConfig> =
  Object.fromEntries(propertyConfigs.map((c) => [c.slug, c]));
