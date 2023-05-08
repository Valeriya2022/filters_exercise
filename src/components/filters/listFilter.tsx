import { FilterListType } from '../../types/filter';
import { Card, Checkbox, Input } from 'antd';
import React, { useState } from 'react';

export function ListFilter({ filter }: { filter: FilterListType }) {
  const [filterList, setFilterList] = useState(filter.list_variants);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setFilterList(filter.list_variants);
    const newFilterList = filter.list_variants.filter((variant) =>
      variant.display_name.toLowerCase().startsWith(e.target.value.toLowerCase()),
    );
    setFilterList(newFilterList);
  };
  return (
    <Card bordered={false} type='inner' title={filter.display_name}>
      <Input style={{ marginBottom: 10 }} placeholder='search' onChange={onSearch} />
      {filterList.map((variant) => {
        return (
          <div key={variant.unique_id}>
            <Checkbox value={variant.unique_id}>{variant.display_name}</Checkbox>
          </div>
        );
      })}
    </Card>
  );
}
