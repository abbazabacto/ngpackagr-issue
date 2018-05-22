import { Injectable, Inject } from '@angular/core';

import { CORE_CONFIG, CoreConfig } from './core.config';

@Injectable()
export class CoreService {

  constructor(
    @Inject(CORE_CONFIG) private coreConfig: CoreConfig,
  ) {}

  getConfig(): CoreConfig {
    return this.coreConfig;
  }

}
