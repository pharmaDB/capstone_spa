/**
 * DrugSearchType Enum
 * The DrugSearchTypeEnum is responsible for determining the allowable search types that can be conducted
 * when looking for a Drug. They match the names of the parameters that can be searched on via the Drug
 * service and the PharmaDB API
 */

export enum DrugSearchType {
    brand_name = "name",
    active_ingredients = "active ingredients",
    application_number = "NDA number",
    manufacturer_name = "manufacturer"
}
