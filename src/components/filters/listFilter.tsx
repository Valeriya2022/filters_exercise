import { FilterListType } from '../../types/filter';
import { Card, Checkbox } from 'antd';

export function ListFilter({ filter }: { filter: FilterListType }) {
  return (
    <Card bordered={false} type='inner' title={filter.display_name}>
      {filter.list_variants.map((variant) => {
        return (
          <div key={variant.unique_id}>
            <Checkbox value={variant.unique_id}>{variant.display_name}</Checkbox>
          </div>
        );
      })}
    </Card>
  );
}
