import React, { useState } from 'react'
import { Fragment } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'

export default function ListInfo() {
  const [checked, setChecked] = useState(false);

  const handleOnPress = (e) => {
    console.log(e);
    setChecked(!checked);
  };

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => { }}
        style={{
          marginRight: 0, // Adjust the left margin to move it to the right
          // marginTop: 10, // Adjust the top margin to move it down
          // marginBottom: 10,
          borderBottomColor: '#FFFFFF',
          borderTopColor: '#FFFFFF',
          borderLeftColor: '#444444',
          borderRightColor: '#444444',
          borderWidth: 0.2,
          padding: 12,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.textTop}>乳清蛋白飲(鴛鴦奶茶)(果果堅果)</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.textDown}>25kg  </Text>
              <Text style={styles.textTop}>RDA 7% - 99大卡(Kcal)</Text>
            </View>
          </View>
          <CheckBox
            checked={checked}
            checkedColor={styles.textDown.color}
            borderTopColor={'#FFB7DD'}
            size={20}
            checkedIcon="check-square"
            iconType="font-awesome"
            onPress={(e) => {handleOnPress()} }
          />

        </View>
      </TouchableOpacity>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  textTop: {
    color: '#FFFFFF'
  },
  textDown: {
    color: '#00DD00'
  },
})