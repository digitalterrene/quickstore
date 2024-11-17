import CategoriesWithExtraScrolling from "./CategoriesWithExtraScrolling";
import TwoColumnGridLayoutWithCardComponents from "./TwoColumnGridLayoutWithCardComponents";
import TwoColumnLayoutWithCardGroups from "./TwoColumnLayoutWithCardGroups";

export const templates = [
  {
    template_name: "categories_with_extra_scrolling",
    template: <CategoriesWithExtraScrolling />,
    installations: 0,
  },
  {
    template_name: "two_column_grid_layout_with_card_components",
    template: <TwoColumnGridLayoutWithCardComponents />,
    installations: 30,
  },
  {
    template_name: "two_column_layout_with_card_groups",
    template: <TwoColumnLayoutWithCardGroups />,
    installations: 32,
  },
];
