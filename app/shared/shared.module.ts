import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

@NgModule({
  imports: [
    NativeScriptFormsModule
  ],
  exports: [
    CounterComponent
  ],
  declarations: [
    CounterComponent
  ]
})
export class SharedModule { }