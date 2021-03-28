import {DrugViewMode} from './drug-view-mode.enum';

export interface DrugViewConfig {
  drugViewMode: DrugViewMode;
  labelOneIdentifier?: string;
  labelTwoIdentifier?: string;
  patentIdentifier?: string;
}
