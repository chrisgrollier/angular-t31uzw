import { ArtefactInfoView } from "./artefact-info-view";

export interface SimpleArtefactView extends ArtefactInfoView {
  id: number;
  kind: string;
  name: string;
  type: string;
}
