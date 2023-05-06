import { useFetch } from '../../hooks/useFetch';
import { FilterType } from '../../types/filter';
import { Spin, Space } from 'antd';
import styled from 'styled-components';
import { ListFilter } from './listFilter';

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Filters() {
  const { data: filters, isLoading }: { data: FilterType[]; isLoading: boolean } =
    useFetch('data/filters.json');

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spin size='large' />
      </SpinnerContainer>
    );
  }

  return (
    <Space direction='vertical'>
      {filters.map((filter) => {
        if (filter.type === 'list') {
          return <ListFilter filter={filter} key={filter.unique_id} />;
        }
      })}
    </Space>
  );
}
