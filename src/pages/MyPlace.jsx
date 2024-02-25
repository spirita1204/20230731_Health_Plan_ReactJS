import React from 'react';
import { Fragment, useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import ArrowButton from '../common/components/Button/ArrowButton';
import { MyPlaceContext } from '../common/contexts/MyPlaceContext';

export default function MyPlace() {

  // 交易畫面共用資料以及函數
  const {
    translate
  } = useContext(MyPlaceContext);

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.text}>spiritache1204</Text>
            <Text style={styles.text}>daniel232323@gmail.com</Text>
            <Text style={styles.text2}>{translate('MYPLACE.ACCT_TYPE') + '免費'} </Text>
          </View>
        </View>
        <View style={styles.container4}>
          {/** 我的體重 按鈕 */}
          <ArrowButton
            title={translate('MYPLACE.TITLE.WEIGHT')}
            logo={'score'}
            bold
          />
          <View style={styles.container4}>
            {/** 提醒 按鈕 */}
            <ArrowButton
              title={translate('MYPLACE.TITLE.ALERT')}
              logo={'timer'}
              borderTopRadius
              bold
            />
            {/** 相簿 按鈕 */}
            <ArrowButton
              title={translate('MYPLACE.TITLE.ALBUM')}
              logo={'photo-camera-back'}
              borderBottomRadius
              bold
            />
          </View>
          <View style={styles.container4}>
            {/** 通訊和隱私權 按鈕 */}
            <ArrowButton
              title={translate('MYPLACE.TITLE.PRIVACY')}
              logo={'privacy-tip'}
              borderTopRadius
              bold
            />
            {/** 聯絡我們 按鈕 */}
            <ArrowButton
              title={translate('MYPLACE.TITLE.CONTACT_US')}
              logo={'contacts'}
              borderBottomRadius
              bold
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