import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { PackageView } from "../model/package-view";
import { PackageInfoView } from "../model/package-info-view";

@Injectable({ providedIn: "root" })
export class PackageService {
  private backPackagesUrl = "http://localhost:8080/api/v1/packages";
  private backApplicationsUrl = "http://localhost:8080/api/v1/applications";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  items: PackageView[];

  constructor(private http: HttpClient) {}

  getPackageViews(): Observable<PackageView[]> {
    return this.http.get<PackageView[]>(this.backPackagesUrl);
  }

  getApplicationViews(): Observable<PackageView[]> {
    return this.http.get<PackageView[]>(this.backApplicationsUrl);
  }
  getPackageView(id: number): Observable<PackageView> {
    return this.http.get<PackageView>(this.backPackagesUrl + "/" + id);
  }

  updatePackageInfoView(id: number, info: PackageInfoView): Observable<any> {
    return this.http.patch(
      this.backPackagesUrl + "/" + id,
      info,
      this.httpOptions
    );
  }
}
