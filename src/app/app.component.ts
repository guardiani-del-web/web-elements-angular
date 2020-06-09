import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  fruits: Array<{ value: string, label: string }>;
  countries: Array<{ value: string, label: string, checked: boolean }>;

  ngOnInit() {
    this.fruits = [
      { label: 'Banana', value: 'banana' },
      { label: 'Pear', value: 'pear', },
      { label: 'Apple', value: 'apple' }
    ];
    this.countries = [
      { label: 'Italy', value: 'it', checked: true },
      { label: 'Peru', value: 'pe', checked: false },
      { label: 'Germany', value: 'de', checked: false }
    ];
  }

  checkboxHandler(currentSelection: []) {
    console.log(currentSelection);
  }

  radioHandler(currentSelection: []) {
    console.log(currentSelection);
  }
}
