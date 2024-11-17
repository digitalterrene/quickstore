import { industry_filters } from "./data";

export function getIndustryFilters(industryName: string) {
  const industryData = industry_filters.find(
    (industry) => industry?.industry === industryName
  );
  if (!industryData) return [];

  function extractFilters(categoryOrItem: any, nesting: any = []): any {
    const result = [];
    const key = categoryOrItem?.name;

    // Add the current level
    const currentLevel = { [key]: categoryOrItem?.filters || null };
    result?.push(currentLevel);

    // Recursively add subcategories and items
    if (categoryOrItem?.subcategories) {
      for (const subcategory of categoryOrItem?.subcategories) {
        const subFilters = extractFilters(subcategory, [...nesting, key]);
        result?.push(...subFilters);
      }
    }
    if (categoryOrItem?.items) {
      for (const item of categoryOrItem?.items) {
        const itemFilters = extractFilters(item, [...nesting, key]);
        result?.push(...itemFilters);
      }
    }

    return result;
  }

  const filtersArray = [{ [industryName]: null }]; // Start with the industry as the first element

  for (const category of industryData?.categories) {
    const categoryFilters = extractFilters(category);
    filtersArray?.push(...categoryFilters);
  }

  return filtersArray;
}
