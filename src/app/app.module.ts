import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PackageListComponent } from "./package-list/package-list.component";
import { PackageAlertsComponent } from "./package-alerts/package-alerts.component";
import { PackageDetailsComponent } from "./package-details/package-details.component";
import { PackageService } from "./package.service";
import { ArtefactListComponent } from "./artefact-list/artefact-list.component";
import { ArtefactService } from "./artefact.service";
import { ArtefactDetailsComponent } from './artefact-details/artefact-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ArtefactListComponent },
      { path: "packages", component: PackageListComponent },
      { path: "packages/:packageId", component: PackageDetailsComponent },
      { path: "artefacts/:artefactId", component: ArtefactDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PackageListComponent,
    PackageAlertsComponent,
    PackageDetailsComponent,
    ArtefactListComponent,
    ArtefactDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [PackageService, ArtefactService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
