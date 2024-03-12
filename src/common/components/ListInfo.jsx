import React, { useState } from 'react';
import { Fragment } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

export function ListInfos({ datas, onPress }) {
  return datas.map((e, i) =>
    <ListInfo
      key={i}
      foodName={e.foodName}
      kcal={e.kcal}
      volume={e.volume}
      unit={e.unit}
      onPress={onPress}
    />
  );
}

export default function ListInfo({ foodName, kcal, volume, unit, onPress }) {
  const [checked, setChecked] = useState(false);

  const handleOnPress = (e) => {
    setChecked(!checked);
  };

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => onPress(checked)}
        style={{
          marginRight: 0, // Adjust the left margin to move it to the right
          // marginTop: 10, // Adjust the top margin to move it down
          // marginBottom: 10,
          borderBottomColor: '#FFFFFF',
          borderTopColor: '#FFFFFF',
          borderLeftColor: '#444444',
          borderRightColor: '#444444',
          borderWidth: 0.2,
          padding: 8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.textTop}>{foodName}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.textDown}>{`${volume}${unit}  `}</Text>
              <Text style={styles.textTop}>{`RDA 7%  -  ${kcal} 大卡(Kcal)`}</Text>
            </View>
          </View>
          <CheckBox
            checked={checked}
            checkedColor={styles.textDown.color}
            borderTopColor={'#FFB7DD'}
            size={20}
            checkedIcon="check-square"
            iconType="font-awesome"
            onPress={(e) => { handleOnPress(); }}
          />
        </View>
      </TouchableOpacity>
    </Fragment>
  );
}

ListInfo.propTypes = {
  foodName: PropTypes.string,
  kcal: PropTypes.number,
  volume: PropTypes.number,
  unit: PropTypes.string,
  onPress: PropTypes.func
};

ListInfo.defaultProps = {
  foodName: '文字文字文字',
  kcal: 0,
  volume: 0,
  unit: 'g',
};

const styles = StyleSheet.create({
  textTop: {
    color: '#FFFFFF'
  },
  textDown: {
    color: '#00DD00'
  },
});