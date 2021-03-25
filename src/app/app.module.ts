import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PackageListComponent } from "./package-list/package-list.component";
import { PackageAlertsComponent } from "./package-alerts/package-alerts.component";
import { PackageDetailsComponent } from "./package-details/package-details.component";
import { PackageService } from "./package.service";
import { ArtefactListComponent } from "./artefact-list/artefact-list.component";
import { ArtefactService } from "./artefact.service";
import { ArtefactDetailsComponent } from "./artefact-details/artefact-details.component";
import { ArtefactVersionDetailsComponent } from "./artefact-version-details/artefact-version-details.component";
import { ArtefactVersionService } from "./artefact-version.service";
import { PackageVersionDetailsComponent } from "./package-version-details/package-version-details.component";
import { PackageVersionService } from "./package-version.service";
import { ArtefactLinksComponent } from "./artefact-links/artefact-links.component";
import { ApplicationListComponent } from "./application-list/application-list.component";
import { ReportService } from "./report.service";
import { ReportComponent } from "./report/report.component";
import { ReportLinkComponent } from './report-link/report-link.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ApplicationListComponent },
      { path: "packages", component: PackageListComponent },
      { path: "artefacts", component: ArtefactListComponent },
      { path: "packages/:packageId", component: PackageDetailsComponent },
      { path: "artefacts/:artefactId", component: ArtefactDetailsComponent },
      {
        path: "artefacts/:artefactId/versions/:versionId",
        component: ArtefactVersionDetailsComponent
      },
      {
        path: "packages/:packageId/versions/:versionId",
        component: PackageVersionDetailsComponent
      },
      {
        path: "report/:kind/:key",
        
        component: ReportComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PackageListComponent,
    PackageAlertsComponent,
    PackageDetailsComponent,
    ArtefactListComponent,
    ArtefactDetailsComponent,
    ArtefactVersionDetailsComponent,
    PackageVersionDetailsComponent,
    ArtefactLinksComponent,
    ApplicationListComponent,
    ReportComponent,
    ReportLinkComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    PackageService,
    ArtefactService,
    ArtefactVersionService,
    PackageVersionService,
    ReportService
  ]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
