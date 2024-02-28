import React from 'react';
import { Fragment } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

function Nutrient({ food, total, target, addSub }) {

  return (
    <View style={styles.content}>
      <View style={{ flex: 2 }}>
        <Text style={{ ...styles.subTitle, color: '#00FF00' }}>{food}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{total}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{target}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.subTitle}>{addSub}</Text>
      </View>
    </View>
  );
}

Nutrient.propTypes = {
  food: PropTypes.string.isRequired,
  total: PropTypes.string,
  target: PropTypes.string,
  addSub: PropTypes.string
};

export default function Nutrients() {
  return (
    <Fragment>
      <ScrollView>
        <View style={styles.container2}>
          <View style={styles.header}>
            <Text style={styles.title}>營養素</Text>
            <View style={styles.content}>
              <View style={{ flex: 3 }}>
                <Text style={styles.subTitle}>營養素</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.subTitle}>總數</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 20, alignItems: 'flex-end' }}>
                <Text style={styles.subTitle}>目標值</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 20, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.subTitle}>[</Text>
                  <Text style={{ ...styles.subTitle, color: '#FF5151' }}>+</Text>
                  <Text style={styles.subTitle}>/-]</Text>
                </View>
              </View>
            </View>
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'卡路里(千卡)'}
              total={'191'}
              target={'10500'}
              addSub={'-10309'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'蛋白質(克'}
              total={'30'}
              target={'525'}
              addSub={'-495'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'碳水化合物'}
              total={'4'}
              target={'1316'}
              addSub={'-1312'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'纖維(克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'糖(克'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'脂肪(克)'}
              total={'6'}
              target={'350'}
              addSub={'-344'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'飽和脂肪(克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'多元不飽和脂肪(克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'單元不飽和脂肪(克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'膽固醇(毫克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'鈉(毫克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
            />
            <View style={styles.horizontalSeparator} />
            <Nutrient
              food={'鉀(毫克)'}
              total={'-'}
              target={'-'}
              addSub={'-'}
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
    marginBottom: 10,
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
    marginTop: 4,
    marginBottom: 4
  },
  horizontalSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});