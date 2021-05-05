import { Component, Input, OnInit } from "@angular/core";
import { SimpleArtefactView } from "../simple-artefact-view";

@Component({
  selector: "app-artefact-links",
  templateUrl: "./artefact-links.component.html",
  styleUrls: ["./artefact-links.component.css"]
})
export class ArtefactLinksComponent implements OnInit {
  @Input() artefact: SimpleArtefactView;

  constructor() {}

  ngOnInit() {}
}
