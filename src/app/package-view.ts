import { SimpleArtefactView } from "./simple-artefact-view";
import { VersionView } from "./version-view";

export interface PackageView extends SimpleArtefactView {
  versions: VersionView[];
  deployable: boolean;
}
