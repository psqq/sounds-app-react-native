import React, {FunctionComponent} from 'react';
import {ViewStyle} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

export type CheckedButtons = {[key: string]: boolean};

type Props = {
  cols: number;
  rows?: number;
  items: JSX.Element[];
  gridStyle?: ViewStyle;
  itemStyle?: ViewStyle;
};

export const FixedGrid: FunctionComponent<Props> = ({
  cols,
  rows = Infinity,
  items,
  gridStyle,
  itemStyle,
}) => {
  const body = [];
  for (let i = 0; i < items.length; i += cols) {
    if (i / cols > rows) {
      break;
    }
    body.push(
      <Row>
        {items.slice(i, i + cols).map((item) => (
          <Col style={itemStyle}>{item}</Col>
        ))}
      </Row>,
    );
  }
  return <Grid style={gridStyle}>{body}</Grid>;
};
