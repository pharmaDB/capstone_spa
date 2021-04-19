// Interfaces relating to components in the Search module

/**
 * The SearchResult interface represents the drug metadata of a search result as its presented
 * to the front end for templating
 */
export interface SearchResult {
    brandName: string;
    manufacturer: string;
    activeIngredients: string[];
    packaging: string[];
    patentCount: number;
    labelCount: number;
}

/**
 * The SearchQuery interface represents the required values and types for a successful search against
 * the pharma DB search endpoint via the Drugs service
 */
export interface SearchQuery {
  searchQuery: string;
  searchType: string;
}
