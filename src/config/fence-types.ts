// ===== FENCE TYPE CONFIGS =====
// One FenceTypeConfig per slug in catalog.ts `fenceTypes`, rendered by
// src/pages/fence-types/[slug].astro. Keep this list in catalog order.

import type { FenceTypeConfig } from "@/types";

import woodFenceInstallation from "./fence-types/wood-fence-installation";
import cedarPrivacyFenceInstallation from "./fence-types/cedar-privacy-fence-installation";
import chainLinkFenceInstallation from "./fence-types/chain-link-fence-installation";
import vinylFenceInstallation from "./fence-types/vinyl-fence-installation";
import metalFenceInstallation from "./fence-types/metal-fence-installation";
import wroughtIronFenceInstallation from "./fence-types/wrought-iron-fence-installation";
import pipeFenceInstallation from "./fence-types/pipe-fence-installation";
import barbedWireFenceInstallation from "./fence-types/barbed-wire-fence-installation";
import wovenWireFenceInstallation from "./fence-types/woven-wire-fence-installation";
import continuousFenceInstallation from "./fence-types/continuous-fence-installation";
import fourRailHorseFenceInstallation from "./fence-types/four-rail-horse-fence-installation";
import woodRanchRailFencing from "./fence-types/wood-ranch-rail-fencing";
import splitRailFenceInstallation from "./fence-types/split-rail-fence-installation";
import fieldFenceInstallation from "./fence-types/field-fence-installation";
import noClimbFenceInstallation from "./fence-types/no-climb-fence-installation";
import decorativeFenceInstallation from "./fence-types/decorative-fence-installation";

export const fenceTypeConfigs: FenceTypeConfig[] = [
  woodFenceInstallation,
  cedarPrivacyFenceInstallation,
  chainLinkFenceInstallation,
  vinylFenceInstallation,
  metalFenceInstallation,
  wroughtIronFenceInstallation,
  pipeFenceInstallation,
  barbedWireFenceInstallation,
  wovenWireFenceInstallation,
  continuousFenceInstallation,
  fourRailHorseFenceInstallation,
  woodRanchRailFencing,
  splitRailFenceInstallation,
  fieldFenceInstallation,
  noClimbFenceInstallation,
  decorativeFenceInstallation,
];

export const fenceTypeConfigMap: Record<string, FenceTypeConfig> =
  Object.fromEntries(fenceTypeConfigs.map((c) => [c.slug, c]));
