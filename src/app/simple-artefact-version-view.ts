import { SimpleArtefactView } from "./simple-artefact-view";

export interface SimpleArtefactVersionView extends SimpleArtefactView {
  versionId: number;
  version: string;
  lastMinorVersion: string;
  versionDescription: string;
  versionComment: string;
  criticity: number;
}
