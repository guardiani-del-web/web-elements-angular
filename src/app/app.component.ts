import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  fruits: Array<{ value: string; label: string }> = [];
  checkboxSelection: Array<{ value: string; label: string }> = [];
  switchSelection: { name: string; status: boolean } = null;

  ngOnInit() {
    this.fruits = [
      { label: "Banana", value: "banana" },
      { label: "Pear", value: "pear" },
      { label: "Apple", value: "apple" }
    ];
  }

  checkboxHandler(currentSelection: []) {
    this.checkboxSelection = currentSelection;
  }

  sliderHandler(currentSelection: any) {
    console.log(currentSelection);
  }

  switchHandler(currentSelection: any) {
    this.switchSelection = currentSelection;
  }
}
