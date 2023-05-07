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
            min={filter.slider_min_value}
            max={filter.slider_max_value}
            value={currentValue[0]}
            onChange={(value) => setCurrentValue((prev) => [value, prev[1]])}
            addonBefore={filter.slider_value_prefix}
            addonAfter={filter.slider_value_suffix}
            width={50}
          />
        </Col>
        <Col>
          <InputNumber
            min={filter.slider_min_value}
            max={filter.slider_max_value}
            value={currentValue[1]}
            onChange={(value) => setCurrentValue((prev) => [prev[0], value])}
            addonBefore={filter.slider_value_prefix}
            addonAfter={filter.slider_value_suffix}
            width={50}
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
