import { IPharmaDBDrugLabel, IPharmaDBDrugPatent} from '../shared/services/drug.service';
import {TimelineLabel, TimelinePatent} from './drug/drug.component';

/**
 * DrugViewConfig Interface
 * The DrugViewConfig Interface is responsible for holding an overall state of the Drug view
 * and includes things like data currently in view and different parameters that affect the timeline
 * and appearance of components on the drug view
 */
export interface DrugViewConfig {
  drugViewMode: DrugViewMode;
  drugLabelSetIDs: string[];
  selectedDrugLabelSetID: string;
  inViewLabelOne: TimelineLabel | undefined;
  inViewLabelTwo: TimelineLabel | undefined;
  isPatentInView: boolean;
  inViewPatent: {
    diffElement: any | undefined;
    patents: IPharmaDBDrugPatent[] | undefined;
  } | undefined;
  inViewPatentNumber?: string;
  labelDiff?: {
    sections: {
      name: string;
      diff: any;
      scores?: any;
      endText?: string;
      endTextAsArray?: any[];
    }[]
  };
  // labelOneIdentifier?: string;
  // labelTwoIdentifier?: string;
  // patentIdentifier?: string;
}

/**
 * DrugViewMode Enum
 * The DrugViewMode enum is responsible for determining what style view is currently being shown on the Drug view. Whether its
 * none, one label, one patent, a label diff or a label v a patent
 */
export enum DrugViewMode {
  none,
  labelDiff,
  historicalLabelDiff
  // patent,
  // label_label,
  // label_patent,
}
