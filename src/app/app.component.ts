import { Component, OnInit } from '@angular/core';

import { CoreConfig } from '@abbazabacto/ngpackagr-issue/core';
import { FooService } from '@abbazabacto/ngpackagr-issue/foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  config: CoreConfig;

  constructor(private fooService: FooService) {}

  ngOnInit() {
    this.config = this.fooService.getConfig();
  }

}
