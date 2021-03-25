import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ReportService {
  private backReportUrl = "http://localhost:8080/api/v1/report";
  private httpOptions = {};
  constructor(private http: HttpClient) {}

  getExcelReport(kind: string, group: string): Observable<Blob> {
    return this.http.get(
      this.backReportUrl + "?kind=" + kind + "&names=" + group,
      {
        responseType: "blob",
        headers: new HttpHeaders({ Accept: "application/vnd.ms-excel" })
      }
    );
  }
}
