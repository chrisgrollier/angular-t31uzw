import { Component, Input, OnInit } from "@angular/core";
import { PackageView } from "../package-view";
import { ReportService } from "../report.service";

@Component({
  selector: "app-report-link",
  templateUrl: "./report-link.component.html",
  styleUrls: ["./report-link.component.css"]
})
export class ReportLinkComponent implements OnInit {
  @Input() package: PackageView;
  constructor(private reportService: ReportService) {}

  ngOnInit() {}
  downloadReport(kind: string, names: string) {
    this.reportService.getExcelReport(kind, names).subscribe(data => {
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
