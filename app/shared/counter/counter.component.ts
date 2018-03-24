import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { isAndroid } from "platform";

@Component({
  selector: "ns-counter",
  moduleId: module.id,
  templateUrl: "./counter.component.html",
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  textCounter: TextField;

  counter = 0;

  constructor(
    private page: Page
  ) {}
  
  ngOnInit(): void {
    this.textCounter = this.page.getViewById<TextField>("counter");
  }

  increase() {
    this.counter++;
  }

  decrease() {

    this.counter--;
    if (isAndroid) {
      this.textCounter.android.clearFocus();
    }
  }
}