import { Component } from '@angular/core';

import { EventBus } from '@gfa/gfa-infra';

@Component({
  selector: 'gfa-mfe-config-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gfa-mfe-config';

  constructor() {
    EventBus.instance.register('hello-world', (name: string) => {
      if (name) console.log('config', 'Hello ' + name);
      else console.log('config', 'Hello world');
    });
  }

  send() {
    EventBus.instance.dispatch('hello-world');
  }
}
