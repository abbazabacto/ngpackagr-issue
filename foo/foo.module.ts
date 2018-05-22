import { NgModule } from '@angular/core';
import { CoreModule } from '@abbazabacto/ngpackagr-issue/core';

import { FooService } from './foo.service';

@NgModule({
  imports: [
    CoreModule
  ],
  providers: [
    FooService
  ]
})
export class FooModule {}
