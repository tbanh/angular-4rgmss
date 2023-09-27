import 'zone.js/dist/zone';
import { InstructionsComponent } from './instructions.component';
import { ChallengeComponent } from './challenge/challenge.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, InstructionsComponent, ChallengeComponent],
  template: `
    <app-instructions></app-instructions>
    <app-challenge></app-challenge>
  `,
})
export class App {}

bootstrapApplication(App);
