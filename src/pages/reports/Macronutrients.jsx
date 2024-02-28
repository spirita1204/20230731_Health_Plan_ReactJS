import React from 'react';
import { Fragment } from 'react';
import { Icon, Text } from 'react-native-elements';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

function EatedComposition({ food, times, target, red, iconColor }) {
  const timesStyle = red ? { ...styles.subTitle, color: '#FF5151' } : styles.subTitle;

  const renderFood = iconColor
    ? (<View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="stop" size={25} color={iconColor} />
      <Text style={{ ...styles.subTitle, color: '#00FF00' }}>{food}</Text>
    </View>)
    : (<View style={{ flex: 2 }}>
      <Text style={styles.subTitle}>{food}</Text>
    </View>);

  return (
    <View style={styles.content}>
      {renderFood}
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={timesStyle}>{times == 0 ? '-' : times + '%'}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{target == 0 ? '-' : target + '%'}</Text>
      </View>
    </View>
  );
}

EatedComposition.propTypes = {
  food: PropTypes.string.isRequired,
  times: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  red: PropTypes.bool,
  iconColor: PropTypes.string
};

function EatedFood({ food, carbohydrate, fat, protein }) {

  return (
    <View style={styles.content}>
      <View style={{ flex: 2 }}>
        <Text style={styles.subTitle}>{food}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{carbohydrate}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{fat}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{protein}</Text>
      </View>
    </View>
  );
}

EatedFood.propTypes = {
  food: PropTypes.string.isRequired,
  carbohydrate: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
};

export default function Macronutrients() {
  return (
    <Fragment>
      <ScrollView>
        <View style={styles.container2}>
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
            <EatedComposition
              food={'碳水化合物'}
              times={'36'}
              target={'24'}
              iconColor={'#46A3FF'}
              red
            />
            <View style={styles.horizontalSeparator} />
            <EatedComposition
              food={'脂肪'}
              times={'42'}
              target={'28'}
              iconColor={'#FFAA00'}
            />
            <View style={styles.horizontalSeparator} />
            <EatedComposition
              food={'蛋白質'}
              times={'0'}
              target={'0'}
              iconColor={'#FF7575'}
            />
            <View style={styles.horizontalSeparator} />
          </View>
        </View>
        <View style={{ ...styles.container2, marginBottom: 10 }}>
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
              carbohydrate={'4.00'}
              fat={'6.10'}
              protein={'30.10'}
            />
            <View style={styles.horizontalSeparator} />
            <EatedFood
              food={'Oero巧克力'}
              carbohydrate={'4.00'}
              fat={'1.10'}
              protein={'0'}
            />
            <View style={styles.horizontalSeparator} />
            <EatedFood
              food={'總數'}
              carbohydrate={'8.00'}
              fat={'7.20'}
              protein={'30.10'}
            />
            <View style={styles.horizontalSeparator} />
          </View>
        </View>
      </ScrollView>
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