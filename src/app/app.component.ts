import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  countries: Array<{ value: string, label: string }>;

  ngOnInit() {
    this.countries = [
      { label: 'Italy', value: 'it' },
      { label: 'Peru', value: 'pe' },
      { label: 'Germany', value: 'de' }
    ]
  }

  checkboxHandler(currentSelection: []) {
    console.log(currentSelection);
  }

  radioHandler(currentSelection: []) {
    console.log(currentSelection);
  }
}
