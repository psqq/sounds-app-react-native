import React, {FunctionComponent} from 'react';
import {ViewStyle} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

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
    const keyRow = `${Math.floor(i / cols)}`;
    body.push(
      <Row key={keyRow}>
        {items.slice(i, i + cols).map((item, index) => (
          <Col key={`${keyRow}-${(i + index) % cols}`} style={itemStyle}>
            {item}
          </Col>
        ))}
      </Row>,
    );
  }
  return <Grid style={gridStyle}>{body}</Grid>;
};
