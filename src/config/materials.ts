// ===== FENCE MATERIALS PAGE CONFIGS =====
// One FenceTypeConfig per slug in catalog.ts `materials`, rendered by
// src/pages/materials/[slug].astro. Keep this list in catalog order.

import type { FenceTypeConfig } from "@/types";

import fenceMaterialsCentralKansas from "./materials/fence-materials-central-kansas";
import farmFenceSupplies from "./materials/farm-fence-supplies";
import ranchFenceMaterials from "./materials/ranch-fence-materials";
import gateHardwareFenceAccessories from "./materials/gate-hardware-fence-accessories";
import woodFenceMaterials from "./materials/wood-fence-materials";
import pipeFenceMaterials from "./materials/pipe-fence-materials";
import barbedWireWovenWireMaterials from "./materials/barbed-wire-woven-wire-materials";

export const materialsConfigs: FenceTypeConfig[] = [
  fenceMaterialsCentralKansas,
  farmFenceSupplies,
  ranchFenceMaterials,
  gateHardwareFenceAccessories,
  woodFenceMaterials,
  pipeFenceMaterials,
  barbedWireWovenWireMaterials,
];

export const materialsConfigMap: Record<string, FenceTypeConfig> =
  Object.fromEntries(materialsConfigs.map((c) => [c.slug, c]));
