import { Component, OnInit } from "@angular/core";
import { PackageView } from "../../model/package-view";
import { PackageService } from "../../service/package.service";

@Component({
  selector: "app-application-list",
  templateUrl: "./application-list.component.html",
  styleUrls: ["./application-list.component.css"]
})
export class ApplicationListComponent implements OnInit {
  applications: PackageView[];

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.loadApplicationViews();
  }

  loadApplicationViews(): void {
    this.packageService
      .getApplicationViews()
      .subscribe(v => (this.applications = v));
  }
}
