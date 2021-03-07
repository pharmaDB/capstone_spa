/* eslint-disable camelcase */
export interface OpenFDADrug {
    submissions: any[];
    application_number: string;
    sponser_name: string;
    openfda: {
        brand_name: string[];
        generic_name: string[];
        manufacturer_name: string[];
        product_ndc: string[];
        product_type: string[];
        route: string[];
        substance_name: string[];
        spl_id: string[];
        spl_set_id: string[];
        package_ndc: string[];
    };
    products: {
        product_number: string;
        reference_drug: string;
        brand_name: string;
        active_ingredients: {
            name: string,
            strength: string
        }[]
        reference_standard: string;
        doseage_dorm: string;
        route: string;
        marketing_status: string;
    }[]
}