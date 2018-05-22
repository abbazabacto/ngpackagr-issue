import { NgModule } from '@angular/core';

import { CORE_CONFIG, CoreConfig } from './core.config';
import { CoreService } from './core.service';

const coreConfig: CoreConfig = {
  enabled: false
};

@NgModule({
  providers: [
    { provide: CORE_CONFIG, useValue: coreConfig },
    CoreService
  ]
})
export class CoreModule {}
