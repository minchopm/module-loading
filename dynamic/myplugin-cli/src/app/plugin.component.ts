import { Component } from '@angular/core';

@Component({
  selector: 'myplugin',
  template: `
    I am a plugin!
    I am a changed plugin :D
    {{name}}
  `
})
export class PluginComponent {
  name = 'asdasd';
  constructor() {
    setTimeout(() => {
      this.name = 'test'
    }, 15000);
  }
}
