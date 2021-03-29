import {DrugViewMode} from './drug-view-mode.enum';

export interface DrugViewConfig {
  drugViewMode: DrugViewMode;
  inViewLabelOne?: any;
  inViewLabelTwo?: any;
  inViewPatent?: any;
  // labelOneIdentifier?: string;
  // labelTwoIdentifier?: string;
  // patentIdentifier?: string;
}
