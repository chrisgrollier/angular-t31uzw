import { Component, OnInit } from "@angular/core";

import { ArtefactService } from "../artefact.service";
import { SimpleArtefactView } from "../simple-artefact-view";

@Component({
  selector: "app-artefact-list",
  templateUrl: "./artefact-list.component.html",
  styleUrls: ["./artefact-list.component.css"]
})
export class ArtefactListComponent implements OnInit {
  artefacts: SimpleArtefactView[];

  constructor(private artefactService: ArtefactService) {}

  ngOnInit() {
    this.loadArtefactViews();
  }

  loadArtefactViews(): void {
    this.artefactService
      .getArtefactViews()
      .subscribe(v => (this.artefacts = v));
  }
}
