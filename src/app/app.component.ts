import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  checkboxHandler(currentSelection: []) {
    console.log(currentSelection);
  }
}
