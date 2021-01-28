import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { SimpleArtefactView } from "./simple-artefact-view";

@Injectable()
export class ArtefactService {
  private backUrl = "http://localhost:8080/api/artefacts";
  constructor(private http: HttpClient) {}
  
  getArtefactViews(): Observable<SimpleArtefactView[]> {
    return this.http.get<SimpleArtefactView[]>(this.backUrl + '/simple');
  }
  
  getArtefactView(id: number): Observable<SimpleArtefactView> {
    return this.http.get<SimpleArtefactView>(this.backUrl + '/' + id);
  }
}
