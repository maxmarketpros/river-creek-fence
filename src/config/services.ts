import type { ServiceConfig } from "@/types";

import fenceInstallation from "./services/fence-installation";
import fenceRepair from "./services/fence-repair";
import fenceReplacement from "./services/fence-replacement";
import residentialFenceInstallation from "./services/residential-fence-installation";
import commercialFenceInstallation from "./services/commercial-fence-installation";
import farmFenceInstallation from "./services/farm-fence-installation";
import ranchFenceInstallation from "./services/ranch-fence-installation";
import agriculturalFenceInstallation from "./services/agricultural-fence-installation";
import privacyFenceInstallation from "./services/privacy-fence-installation";
import securityFenceInstallation from "./services/security-fence-installation";
import customFenceInstallation from "./services/custom-fence-installation";
import gateInstallation from "./services/gate-installation";
import drivewayGateInstallation from "./services/driveway-gate-installation";
import fencePostReplacement from "./services/fence-post-replacement";
import stormDamagedFenceRepair from "./services/storm-damaged-fence-repair";
import fenceRemoval from "./services/fence-removal";

export const services: ServiceConfig[] = [
  fenceInstallation,
  fenceRepair,
  fenceReplacement,
  residentialFenceInstallation,
  commercialFenceInstallation,
  farmFenceInstallation,
  ranchFenceInstallation,
  agriculturalFenceInstallation,
  privacyFenceInstallation,
  securityFenceInstallation,
  customFenceInstallation,
  gateInstallation,
  drivewayGateInstallation,
  fencePostReplacement,
  stormDamagedFenceRepair,
  fenceRemoval,
];

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return services.find((s) => s.slug === slug);
}
