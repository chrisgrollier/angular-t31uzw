import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SimpleArtefactView } from "../simple-artefact-view";
import { ArtefactService } from "../artefact.service";
@Component({
  selector: 'app-artefact-details',
  templateUrl: './artefact-details.component.html',
  styleUrls: ['./artefact-details.component.css']
})
export class ArtefactDetailsComponent implements OnInit {
artefact: SimpleArtefactView;

  constructor(
    private route: ActivatedRoute,
    private artefactService: ArtefactService
  ) {}

  ngOnInit() {
    // First get the package id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const artefactIdFromRoute = Number(routeParams.get("artefactId"));

    // Find the product that correspond with the id provided in route.
    this.artefactService
      .getArtefactView(artefactIdFromRoute)
      .subscribe(v => (this.artefact = v));
  }

}