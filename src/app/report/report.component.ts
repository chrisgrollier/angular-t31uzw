import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReportService } from "../report.service";

@Component({
  selector: "app-report",
  template: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    // First get the package kind and name from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const packageKindFromRoute = String(routeParams.get("kind"));
    const packageGroupFromRoute = String(routeParams.get("key"));
    this.reportService
      .getExcelReport(packageKindFromRoute, packageGroupFromRoute)
      .subscribe(data => {
        const newBlob = new Blob([data], { type: "application/vnd.ms-excel" });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }
        const downloadURL = URL.createObjectURL(newBlob);
        window.open(downloadURL);
      });
  }
}
