import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SimpleArtefactVersionView } from "./simple-artefact-version-view";
import { VersionView } from "./version-view";

@Injectable()
export class ArtefactVersionService {
  private backUrl = "http://localhost:8080/api/artefacts";
  private versionsUrl = "/versions";
  private versionsBackUrl = "http://localhost:8080/api/artefact_versions";
  constructor(private http: HttpClient) {}

  getVersionView(
    artefactId: number,
    versionId: number
  ): Observable<VersionView> {
    return this.http.get<VersionView>(
      this.backUrl + "/" + artefactId + this.versionsUrl + "/" + versionId
    );
  }

  getSimpleArtefactVersionView(
    id: number
  ): Observable<SimpleArtefactVersionView> {
    return this.http.get<SimpleArtefactVersionView>(
      this.versionsBackUrl + "/" + id
    );
  }
}
