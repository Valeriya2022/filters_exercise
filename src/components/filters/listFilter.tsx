import { FilterListType } from '../../types/filter';
import { Card } from 'antd';

export function ListFilter({ filter }: { filter: FilterListType }) {
  return (
    <Card bordered={false} type='inner'>
      {filter.display_name}
    </Card>
  );
}
