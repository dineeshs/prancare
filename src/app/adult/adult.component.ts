import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})
export class Adult  {

  constructor() { }
  step;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
