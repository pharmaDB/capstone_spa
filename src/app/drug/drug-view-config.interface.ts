import {DrugViewMode} from './drug-view-mode.enum';

export interface DrugViewConfig {
  drugViewMode: DrugViewMode;
  inViewLabelOne?: any;
  inViewLabelTwo?: any;
  isPatentInView: boolean;
  inViewPatent?: any;
  labelDiff?: {
    sections: {
      name: string;
      diff: any;
    }[]
  };
  // labelOneIdentifier?: string;
  // labelTwoIdentifier?: string;
  // patentIdentifier?: string;
}
