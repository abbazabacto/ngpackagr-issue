import { InjectionToken } from '@angular/core';

export interface CoreConfig {
  enabled: boolean;
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('CoreConfig');
