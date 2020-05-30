import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import {ICON_DAY, ICON_COFFEE_CUP, ICON_EYE, ICON_YOGA} from '../assets';

export type CheckedButtons = {[key: string]: boolean};

type Props = {
  onChange?: (checked: CheckedButtons) => void;
};

export const FirstScreenButtons: FunctionComponent<Props> = ({onChange}) => {
  const buttons = [
    [
      {
        gradient: ['#6161c1', '#696ad0'],
        checkedGradient: ['#3a3ac2', '#3f40d1'],
        title: 'лучше засыпать',
        id: 'лучше засыпать',
        img: ICON_DAY,
      },
      {
        gradient: ['#5664c7', '#596ad4'],
        checkedGradient: ['#2e41c7', '#2f45d4'],
        title: 'снизить стресс',
        id: 'снизить стресс',
        img: ICON_COFFEE_CUP,
      },
    ],
    [
      {
        gradient: ['#6d6694', '#776fa0'],
        checkedGradient: ['#544894', '#5c4fa1'],
        title: 'концентрировать внимание',
        id: 'концентрировать внимание',
        img: ICON_EYE,
      },
      {
        gradient: ['#6d55a4', '#725db5'],
        checkedGradient: ['#5634a3', '#5638b5'],
        title: 'научиться медитировать',
        id: 'научиться медитировать',
        img: ICON_YOGA,
      },
    ],
  ];
  const [checked, setChecked] = useState<CheckedButtons>({});
  const toggle = (id: string) => {
    if (!checked[id]) {
      setChecked({...checked, [id]: true});
    } else {
      setChecked({...checked, [id]: false});
    }
    if (onChange) {
      onChange(checked);
    }
  };
  return (
    <Grid style={styles.grid}>
      {buttons.map((col, i) => (
        <Col key={i}>
          {col.map((btn, j) => (
            <Row key={j}>
              <TouchableOpacity
                onPress={() => toggle(btn.id)}
                style={styles.cell}
                key={btn.title}>
                <LinearGradient
                  colors={checked[btn.id] ? btn.checkedGradient : btn.gradient}
                  style={{
                    ...styles.cellGradient,
                    ...(checked[btn.id] ? styles.checked : {}),
                  }}>
                  <Image style={styles.btnIcon} source={btn.img} />
                  <Text style={styles.cellText}>{btn.title}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Row>
          ))}
        </Col>
      ))}
    </Grid>
  );
};

const styles = StyleSheet.create({
  grid: {
    marginBottom: 40,
    marginTop: 40,
  },
  cell: {
    flex: 1,
  },
  cellGradient: {
    flex: 1,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  checked: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  btnIcon: {
    width: 100,
    height: 100,
  },
  cellText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
});
