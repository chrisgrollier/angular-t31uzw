import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-spaces",
  templateUrl: "./spaces.component.html",
  styleUrls: ["./spaces.component.css"]
})
export class SpacesComponent {
  @Input() set count(value: number) {
    this.numbers = Array(value - 1)
      .fill(0)
      .map((x, i) => i);
  }
  numbers: number[];
}
