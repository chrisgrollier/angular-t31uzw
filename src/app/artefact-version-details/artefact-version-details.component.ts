import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtefactVersionService } from "../artefact-version.service";
import { SimpleArtefactVersionView } from "../simple-artefact-version-view";
import { VersionView } from "../version-view";

@Component({
  selector: "app-artefact-version-details",
  templateUrl: "./artefact-version-details.component.html",
  styleUrls: ["./artefact-version-details.component.css"]
})
export class ArtefactVersionDetailsComponent implements OnInit {
  artefactVersion: SimpleArtefactVersionView;
  version: VersionView;

  constructor(
    private route: ActivatedRoute,
    private artefactVersionService: ArtefactVersionService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const artefactIdFromRoute = Number(routeParams.get("artefactId"));
    const versionIdFromRoute = Number(routeParams.get("versionId"));
    this.artefactVersionService
      .getSimpleArtefactVersionView(versionIdFromRoute)
      .subscribe(v => (this.artefactVersion = v));
    this.artefactVersionService
      .getVersionView(artefactIdFromRoute, versionIdFromRoute)
      .subscribe(v => (this.version = v));
  }
}
