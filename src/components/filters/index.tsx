import { useFetch } from '../../customHooks/useFetch';
import { FilterType } from '../../types/filter';

function Filters() {
  const { data: filters }: { data: FilterType[] } = useFetch('data/filters.json');
  for (let filter of filters) {
    if (filter.type === 'list') {
      console.log(filter.list_variants);
    }
  }

  return <></>;
}

export default Filters;
