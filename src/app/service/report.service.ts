import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ReportService {
  private backReportUrl = "http://localhost:8080/api/v1/report";
  constructor(private http: HttpClient) {}

  getExcelReportByKindAndName(kind: string, name: string): Observable<Blob> {
    return this.http.get(
      this.backReportUrl + "?kind=" + kind + "&names=" + name,
      {
        responseType: "blob",
        headers: new HttpHeaders({ Accept: "application/vnd.ms-excel" })
      }
    );
  }

  getExcelReportByKindAndGroup(kind: string, name: string): Observable<Blob> {
    return this.http.get(
      this.backReportUrl + "?kind=" + kind + "&group=" + name,
      {
        responseType: "blob",
        headers: new HttpHeaders({ Accept: "application/vnd.ms-excel" })
      }
    );
  }

  getExcelReportAllDeployable(): Observable<Blob> {
    return this.http.get(this.backReportUrl, {
      responseType: "blob",
      headers: new HttpHeaders({ Accept: "application/vnd.ms-excel" })
    });
  }
}
