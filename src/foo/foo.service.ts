import { Injectable, Inject } from '@angular/core';

import { CORE_CONFIG, CoreConfig, CoreService } from '@abbazabacto/ngpackagr-issue/core';

@Injectable()
export class FooService {

  constructor(
    @Inject(CORE_CONFIG) private coreConfig: CoreConfig,
    private coreService: CoreService
  ) {}

  getConfig() {
    return this.coreService.getConfig();
  }

}
