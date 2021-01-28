import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PackageView } from "../package-view";
import { PackageService } from "../package.service";

@Component({
  selector: "app-package-details",
  templateUrl: "./package-details.component.html",
  styleUrls: ["./package-details.component.css"]
})
export class PackageDetailsComponent implements OnInit {
  package: PackageView;

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const packageIdFromRoute = Number(routeParams.get("packageId"));

    // Find the product that correspond with the id provided in route.
    this.packageService
      .getPackageView(packageIdFromRoute)
      .subscribe(v => (this.package = v));
  }
}
