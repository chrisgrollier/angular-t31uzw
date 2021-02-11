import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SimpleArtefactVersionView } from "./simple-artefact-version-view";
import { VersionView } from "./version-view";

@Injectable()
export class PackageVersionService {
  private backUrl = "http://localhost:8080/api/packages";
  private versionsUrl = "/versions";
  private versionsBackUrl = "http://localhost:8080/api/package_versions";

  constructor(private http: HttpClient) {}

  getVersionView(
    packageId: number,
    versionId: number
  ): Observable<VersionView> {
    return this.http.get<VersionView>(
      this.backUrl + "/" + packageId + this.versionsUrl + "/" + versionId
    );
  }

  getSimplePackageVersionView(
    id: number
  ): Observable<SimpleArtefactVersionView> {
    return this.http.get<SimpleArtefactVersionView>(
      this.versionsBackUrl + "/" + id
    );
  }
}
