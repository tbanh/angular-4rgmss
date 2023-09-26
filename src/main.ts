import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InstructionsComponent } from './instructions.component';
import { ChallengeComponent } from './challenge/challenge.component';

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
