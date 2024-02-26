import React from 'react';
import { Fragment } from 'react';
import { Icon, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

function EatedFood({ food, times, calories, red, green, type, iconColor }) {
  const foodStyle = red || green ? { ...styles.subTitle, color: green ? '#00FF00' : '#FF5151' } : styles.subTitle;
  const timesStyle = red ? { ...styles.subTitle, color: '#FF5151' } : styles.subTitle;
  const caloriesStyle = red || green ? { ...styles.subTitle, color: green ? '#00FF00' : '#FF5151' } : styles.subTitle;

  const timeString = type === 'FOOD' ? 'x' + times + ' =' : '(' + times + '%)';

  const renderFood = iconColor
    ? (<View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="stop" size={25} color={iconColor} />
      <Text style={foodStyle}>{food}</Text>
    </View>)
    : (<View style={{ flex: 2 }}>
      <Text style={foodStyle}>{food}</Text>
    </View>);

  return (
    <View style={styles.content}>
      {renderFood}
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={timesStyle}>{timeString}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={caloriesStyle}>{calories}</Text>
      </View>
    </View>
  );
}

EatedFood.propTypes = {
  food: PropTypes.string.isRequired,
  times: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  red: PropTypes.bool,
  green: PropTypes.bool,
  type: PropTypes.string.isRequired,
  iconColor: PropTypes.string
};


EatedFood.defaultProps = {
  type: ''
};

export default function Macronutrients() {
  return (
    <Fragment>
      <View style={{ ...styles.container2 }}>
        <View style={styles.header}>
          <Text style={styles.title}>巨量營養素</Text>
          <Text style={styles.title2}>708</Text>
          <View style={styles.content}>
            <View style={{ flex: 3 }}>
              <Text style={styles.subTitle}></Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.subTitle}>總數</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 20, alignItems: 'flex-end' }}>
              <Text style={styles.subTitle}>目標值</Text>
            </View>
          </View>
          <View style={styles.horizontalSeparator} />
          <EatedFood
            food={'碳水化合物'}
            times={'36'}
            calories={'254'}
            green
            iconColor={'#46A3FF'}
          />
          <View style={styles.horizontalSeparator} />
          <EatedFood
            food={'脂肪'}
            times={'42'}
            calories={'298'}
            green
            iconColor={'#FFAA00'}
          />
          <View style={styles.horizontalSeparator} />
          <EatedFood
            food={'蛋白質'}
            times={'0'}
            calories={'-'}
            green
            iconColor={'#FF7575'}
          />
          <View style={styles.horizontalSeparator} />
        </View>
      </View>
      <View style={{ ...styles.container2 }}>
        <View style={styles.header}>
          <Text style={styles.title}>已攝取的食物</Text>
          <View style={styles.content}>
            <View style={{ flex: 3 }}>
              <Text style={styles.subTitle}>食物</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
              <Text style={styles.subTitle}>碳水化</Text>
              <Text style={styles.subTitle}>合物</Text>
              <Text style={styles.subTitle}>(克)</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20, alignItems: 'flex-end' }}>
              <Text style={styles.subTitle}>脂肪</Text>
              <Text style={styles.subTitle}>(克)</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20, alignItems: 'flex-end' }}>
              <Text style={styles.subTitle}>蛋白質</Text>
              <Text style={styles.subTitle}>(克)</Text>
            </View>
          </View>
          <View style={styles.horizontalSeparator} />
          <EatedFood
            food={'奕順軒'}
            times={'14'}
            calories={'156'}
            type={'FOOD'}
          />
          <View style={styles.horizontalSeparator} />
          <EatedFood
            food={'Oero巧克力'}
            times={'2'}
            calories={'15644'}
            type={'FOOD'}
          />
          <View style={styles.horizontalSeparator} />
          <EatedFood
            food={'總數'}
            times={'16'}
            calories={'15800'}
            type={'FOOD'}
            red
          />
          <View style={styles.horizontalSeparator} />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
  },
  container2: {
    backgroundColor: '#666666',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 5,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  title2: {
    fontSize: 25,
    marginTop: -10,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});