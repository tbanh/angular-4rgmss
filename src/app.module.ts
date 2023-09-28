import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChallengeComponent } from './challenge/challenge.component';
import { PhoneLastFourPipe } from './challenge/phone-last-four.pipe';
import { InstructionsComponent } from './instructions.component';

@NgModule({
  declarations: [PhoneLastFourPipe],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    InstructionsComponent,
    ChallengeComponent,
  ],
  bootstrap: [ChallengeComponent],
})
export class AppModule {}
