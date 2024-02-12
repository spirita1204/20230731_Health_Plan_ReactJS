import React from 'react';
import { Fragment } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import ArrowButton from '../common/components/Button/ArrowButton';

export default function MyPlace() {
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.text}>spiritache1204</Text>
            <Text style={styles.text}>daniel232323@gmail.com</Text>
            <Text style={styles.text2}>帳號類型: 免費</Text>
          </View>
        </View>
        <View style={styles.container4}>
          {/** 我的體重 按鈕 */}
          <ArrowButton
            title={'我的體重'}
            logo={'score'}
          />
          <View style={styles.container4}>
            {/** 提醒 按鈕 */}
            <ArrowButton
              title={'提醒'}
              logo={'timer'}
              borderTopRadius
            />
            {/** 相簿 按鈕 */}
            <ArrowButton
              title={'相簿'}
              logo={'photo-camera-back'}
              borderBottomRadius
            />
          </View>
          <View style={styles.container4}>
            {/** 通訊和隱私權 按鈕 */}
            <ArrowButton
              title={'通訊和隱私權'}
              logo={'privacy-tip'}
              borderTopRadius
            />
            {/** 聯絡我們 按鈕 */}
            <ArrowButton
              title={'聯絡我們'}
              logo={'contacts'}
              borderBottomRadius
            />
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444'
  },
  text: {
    fontSize: 15,
    color: '#FFFFFF'
  },
  text2: {
    marginTop: 10,
    color: '#FFBB00'
  },
  container2: {
    backgroundColor: '#666666',
    paddingVertical: 15,
    alignItems: 'flex-end'
  },
  container3: {
    padding: 10,
    alignItems: 'flex-end'
  },
  container4: {
    marginTop: 36
  },
});