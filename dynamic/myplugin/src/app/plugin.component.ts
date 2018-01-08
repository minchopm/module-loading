import { Component } from '@angular/core';

@Component({
  selector: 'myplugin',
  template: `
    I am a plugin!
    {{name}}
    `
})
export class PluginComponent {
  name = 'alabala';
  constructor() {
    setTimeout(() => {
      this.name = 'test'
    }, 15000);
  }
}
