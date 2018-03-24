import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        name: "Firebase",
        speaker: "By Julio"
      },
      {
        name: "TypeScript",
        speaker: "By Julio"
      },
      {
        name: "NativeScript",
        speaker: "By Carmen and Pame"
      }

    ];
  }

}
