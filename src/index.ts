import { NgModule } from '@angular/core';
import { CoreModule } from '@abbazabacto/ngpackagr-issue/core';
import { FooModule } from '@abbazabacto/ngpackagr-issue/foo';

@NgModule({
  imports: [
    CoreModule,
    FooModule,
  ],
  exports: [
    CoreModule,
    FooModule,
  ]
})
export class NgPackagrIssueModule {}
