import React, { useCallback } from 'react'
import { Fragment } from 'react'
import LongPressButton from '../common/components/LongPressButton'
import DonutPieChart from '../common/components/Charts/DonutPieChart';
import HeatMapCharts from '../common/components/Charts/HeatMapCharts';
import { View, Text, StyleSheet } from 'react-native';
import { Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 日記
 * 
 * @returns 
 */
export default function Note({ navigation }) {
    /**
       * 導向食物導覽頁
       */
    const handlClick = useCallback((choose) => {
        navigation.navigate('Foods', { choose: choose });
    }, []);

    return (
        <Fragment>
            <ScrollView>
                <View style={styles.container}>
                    {/* 早午晚餐按鈕 */}
                    <LongPressButton
                        leftLogo={require('../../assets/english-breakfast.png')}
                        leftText={' 早餐'}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('BREAKFAST') }}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/lunch-time.png')}
                        leftText={' 午餐'}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('LUNCH') }}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/christmas-dinner.png')}
                        leftText={' 晚餐'}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('DINNER') }}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/sweets.png')}
                        leftText={' 點心'}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('SWEETS') }}
                    ></LongPressButton>
                    <View style={styles.horizontalSeparator} />
                    {/* 總結數據 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ flex: 30, marginRight: 10 }}>
                            <Text style={styles.text}>{'總結數據'}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{'剩餘的卡路里'}</Text>
                                <Text style={styles.text}>{'1500'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{'攝取的卡路里'}</Text>
                                <Text style={styles.text}>{'0'}</Text>
                            </View>
                            <View style={styles.horizontalSeparator} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{'0 % 的RDA'}</Text>
                                <Text style={styles.text}>{'1500'}</Text>
                            </View>
                        </View>
                        <HeatMapCharts />
                    </View>
                    <View style={styles.horizontalSeparator} />
                    {/* 統計圖表 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 2.5 }}>
                            <View style={styles.leftContent}>
                                <Image source={require('../../assets/594846.png')} style={{ width: 15, height: 15 }} />
                                <Text style={styles.text}>{' 碳水化合物: 52%'}</Text>
                            </View>
                            <View style={styles.leftContent}>
                                <Image source={require('../../assets/5111178.png')} style={{ width: 15, height: 15 }} />
                                <Text style={styles.text}>{' 脂肪: 24%'}</Text>
                            </View>
                            <View style={styles.leftContent}>
                                <Image source={require('../../assets/5853933.png')} style={{ width: 15, height: 15 }} />
                                <Text style={styles.text}>{' 蛋白質: 24%'}</Text>
                            </View>
                        </View>
                        <DonutPieChart />
                    </View>
                    <View style={styles.horizontalSeparator} />
                    <Text style={styles.text}>{'脂肪: 10.00克'}</Text>
                    <Text style={styles.text}>{'膽固醇: 0毫克'}:</Text>
                    <Text style={styles.text}>{'鈉: 0毫克'}</Text>
                    <Text style={styles.text}>{'碳水化合物: 0.00克'}</Text>
                    <Text style={styles.text}>{'膳食纖維: 0.0克'}</Text>
                    <Text style={styles.text}>{'糖: 0.00克'}</Text>
                    <Text style={styles.text}>{'蛋白質: 20.10克'}</Text>
                    <View style={styles.horizontalSeparator} />
                </View>
            </ScrollView>
        </Fragment >
    )
}

Note.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    horizontalSeparator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
        marginHorizontal: 3
    },
    container: {
        padding: 10, // Add padding around the content
        backgroundColor: '#444444'
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF'
    }
});