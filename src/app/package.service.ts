import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PackageView } from "./package-view";

@Injectable({ providedIn: "root" })
export class PackageService {

  private backUrl = 'http://localhost:8080/api/packages';

  items : PackageView[];

  constructor(private http: HttpClient) {}

  getPackageViews(): Observable<PackageView[]> {
    return this.http.get<PackageView[]>(this.backUrl);
  }

  getPackageView(id: number): Observable<PackageView> {
    return this.http.get<PackageView>(this.backUrl + '/' + id);
  }
}
