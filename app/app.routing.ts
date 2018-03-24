import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { CounterComponent } from "./counter/counter.component";

const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/home", 
        pathMatch: "full" 
    },
    { 
        path: "home", 
        component: HomeComponent 
    },
    { 
        path: "list", 
        component: ListComponent 
    },
    { 
        path: "counter", 
        component: CounterComponent 
    }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }