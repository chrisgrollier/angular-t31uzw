import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { PackageView } from "./package-view";
import { InfoView } from "./info-view";
import { PackageInfoView } from "./package-info-view";

@Injectable({ providedIn: "root" })
export class PackageService {
  private backUrl = "http://localhost:8080/api/v1/packages";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  items: PackageView[];

  constructor(private http: HttpClient) {}

  getPackageViews(): Observable<PackageView[]> {
    return this.http.get<PackageView[]>(this.backUrl);
  }

  getPackageView(id: number): Observable<PackageView> {
    return this.http.get<PackageView>(this.backUrl + "/" + id);
  }

  updatePackageInfoView(id: number, info: PackageInfoView): Observable<any> {
    return this.http.patch(this.backUrl + "/" + id, info, this.httpOptions);
  }
}
