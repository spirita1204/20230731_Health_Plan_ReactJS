import React from 'react';
import { Fragment } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ImageBox from '../common/components/ImageBox';
import PayRadioButton from '../common/components/Button/PayRadioButton';

export default function Premium() {
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.container3}>
          <ImageBox
            title={'營養師安排的飲食計畫'}
            content={'透過進食多樣化、營養居衡的飲食計畫，簡化飲食決策'}
            uri='https://media.ct.org.tw/upload/news_article/2023/10/27/653b1d736d0b3_03LB.jpg?wm=LB'
          ></ImageBox>
          <ImageBox
            title={'建立並安排您的客製化餐點計畫'}
            content={'建立可輕鬆安排至日記中的個人化每週飲食計畫，從而提前計畫您的飲食'}
            uri='https://contents.mediadecathlon.com/s815289/k$08e32006b20580421596f059bc1a4ca8/1800x0/3256pt2397/5480xcr4110/alimentation%2520healthy.jpeg?format=auto'
          ></ImageBox>
          <ImageBox
            title={'將HealthPlan核准的食譜直接紀錄到日記'}
            content={'只須點按幾下，即可將所有可用的食譜記錄到日記，免於手動輸入和計算之麻煩'}
            uri='https://coolhealth.sharkcdn.io/blog/thumb_500_b0ba6b640bbe6888bd3ccea319eea2d7bdd3c09b.jpg'
          ></ImageBox>
          <ImageBox
            title={'追蹤您的飲食方式'}
            content={'建立6種其他餐點類型，並用符合您的飲食方式的獨特標籤來加以自訂'}
            uri='https://img.ltn.com.tw/Upload/health/page/800/2023/01/16/php6n2DUU.jpg'
          ></ImageBox>
          <ImageBox
            title={'追蹤您每日的水分攝取量並設定目標'}
            content={'追蹤您的水分攝取量並自訂飲水目標'}
            uri='https://cdn2.ettoday.net/images/5548/d5548114.jpg'
          ></ImageBox>
          <ImageBox
            title={'複製食品到多天的飲食中，加快食物紀錄速度'}
            content={'複製經常享用的食物到多餐和多天的飲食中，從而節省時間'}
            uri='https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2018/05/03/99/4702972.png&x=0&y=0&sw=0&sh=0&exp=3600'
          ></ImageBox>
        </View>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.text1}>進階版讓您更接近目標</Text>
            <Text style={styles.text2}>在分析數百萬個食物紀錄後，我們發現進階版會員在將進階版功能加入它們的日常活動時，向目標體重接近的成效會高達3倍，而且保持動力的時間會長達兩倍</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={{ ...styles.text3, textAlign: 'center' }}>升級至進階版，達成健康目標更輕鬆</Text>
        </View>
        <View style={styles.container3}>
          <PayRadioButton />
          <PayRadioButton />
          <PayRadioButton />
        </View>
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444',
  },
  container2: {
    backgroundColor: '#886600',
    marginTop: 10,
    paddingVertical: 15,
  },
  container3: {
    padding: 10
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4
  },
  text2: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 4
  },
  text3: {
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 4,
    fontWeight: 'bold',
  }
});