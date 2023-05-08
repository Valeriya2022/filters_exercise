import { FilterSliderType } from '../../types/filter';
import { Card, Slider, Row, Col, InputNumber } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { useState } from 'react';

export function SliderFilter({ filter }: { filter: FilterSliderType }) {
  const [currentValue, setCurrentValue] = useState<[number, number]>([
    filter.slider_min_value,
    filter.slider_max_value,
  ]);

  const marks: SliderMarks = {
    [filter.slider_min_value]: {
      label: (
        <strong>
          {filter.slider_value_prefix}
          {filter.slider_min_value}
          {filter.slider_value_suffix}
        </strong>
      ),
    },
    [filter.slider_max_value]: {
      label: (
        <strong>
          {filter.slider_value_prefix}
          {filter.slider_max_value}
          {filter.slider_value_suffix}
        </strong>
      ),
    },
  };
  return (
    <Card bordered={false} type='inner' title={filter.display_name}>
      <Row>
        <Col>
          <InputNumber
            value={currentValue[0]}
            addonBefore={filter.slider_value_prefix}
            addonAfter={filter.slider_value_suffix}
            type={'number'}
            readOnly={true}
          />
        </Col>
        <Col>
          <InputNumber
            min={currentValue[0]}
            value={currentValue[1]}
            addonBefore={filter.slider_value_prefix}
            addonAfter={filter.slider_value_suffix}
            type={'number'}
            readOnly={true}
          />
        </Col>
      </Row>
      <Slider
        range={true}
        defaultValue={[filter.slider_min_value, filter.slider_max_value]}
        marks={marks}
        min={filter.slider_min_value}
        max={filter.slider_max_value}
        value={currentValue}
        onChange={(value) => setCurrentValue(value)}
      />
    </Card>
  );
}
