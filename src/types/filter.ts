interface ListVariantType {
  unique_id: number;
  display_name: string;
}

interface FilterListType {
  unique_id: number;
  display_name: string;
  type: "list";
  list_variants: ListVariantType[]
}

interface FilterSliderType {
  unique_id: number;
  display_name: string;
  type: "slider";
  slider_min_value: number;
  slider_max_value: number;
  slider_value_prefix: string | null;
  slider_value_suffix: string | null;
}

export type FilterType = FilterListType | FilterSliderType;