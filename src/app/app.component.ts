import { Component } from '@angular/core';

import { publicApiFunction } from '@gfa/gfa-infra';

@Component({
  selector: 'gfa-mfe-config-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gfa-mfe-config';

  constructor(){
    publicApiFunction('config')
  }
}
