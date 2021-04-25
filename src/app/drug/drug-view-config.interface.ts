/**
 * DrugViewConfig Interface
 * The DrugViewConfig Interface is responsible for holding an overall state of the Drug view
 * and includes things like data currently in view and different parameters that affect the timeline
 * and appearance of components on the drug view
 */
export interface DrugViewConfig {
  drugViewMode: DrugViewMode;
  inViewLabelOne?: any;
  inViewLabelTwo?: any;
  isPatentInView: boolean;
  inViewPatent?: any;
  inViewPatentNumber?: any;
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
  label,
  patent,
  label_label,
  label_patent,
}
