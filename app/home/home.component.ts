import { Component, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() { }

  // logout() {
  //   dialogs.confirm({
  //     title: "Guardar Cambios",
  //     message: "Quieres cambiar tu contraseña?",
  //     cancelButtonText: "Cancelar",
  //     okButtonText: "Si",
  //   }).then(result => {
  //     console.log("Dialog result: " + result);
  //   });
  // }
  
  logout() {
    dialogs.confirm("Cerrar Sesion").then(result => {
      console.log("Dialog result: " + result);
    });
  }


}
