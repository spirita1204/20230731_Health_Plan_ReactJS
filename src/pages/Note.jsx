import React, { useCallback, useContext } from 'react';
import { Fragment } from 'react';
import LongPressButton from '../common/components/Button/LongPressButton';
import DonutPieChart from '../common/components/Charts/DonutPieChart';
import HeatMapCharts from '../common/components/Charts/HeatMapCharts';
import { View, Text, StyleSheet } from 'react-native';
import { Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NoteContext } from '../common/contexts/NoteContext';

/**
 * 日記
 * 
 * 在React中，当你使用navigation.navigate()导航到另一个屏幕时，React Navigation会将navigation对象传递给你的组件。这个navigation对象包含了一些方法，比如navigate，goBack等，以及当前屏幕的一些信息。
 * 在你的代码中，Note组件是通过导航器（可能是Stack Navigator或Tab Navigator等）导航到的其中一个屏幕。当你在导航器中配置Note组件时，你可能传递了navigation属性给它，这样它就能够使用导航器提供的导航功能了。
 * 所以，当你调用navigation.navigate('Foods', { choose: choose })时，你实际上是在使用导航器提供的导航功能，将屏幕切换到了名为'Foods'的另一个屏幕，并且将一个参数对象传递给了'Foods'屏幕。
 *
 * @returns 
 */
export default function Note({ navigation }) {
    // 交易畫面共用資料以及函數
    const {
        translate
    } = useContext(NoteContext);

    /**
       * 導向食物導覽頁
       */
    const handlClick = useCallback((choose) => {
        navigation.navigate('Foods', { choose: choose });
    }, [navigation]);

    return (
        <Fragment>
            <ScrollView>
                <View style={styles.container}>
                    {/* 早午晚餐按鈕 */}
                    <LongPressButton
                        leftLogo={require('../../assets/english-breakfast.png')}
                        leftText={translate('NOTE.LONG_BUTTON.BREAKFAST')}
                        //leftText={translate('NOTE.LONG_BUTTON.BREAKFAST')}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('BREAKFAST'); }}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/lunch-time.png')}
                        leftText={translate('NOTE.LONG_BUTTON.LUNCH')}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('LUNCH'); }}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/christmas-dinner.png')}
                        leftText={translate('NOTE.LONG_BUTTON.DINNER')}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('DINNER'); }}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/sweets.png')}
                        leftText={translate('NOTE.LONG_BUTTON.SWEETS')}
                        rightLogo={require('../../assets/plus.png')}
                        onPress={() => { handlClick('SWEETS'); }}
                    ></LongPressButton>
                    <View style={styles.horizontalSeparator} />
                    {/* 總結數據 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ flex: 30, marginRight: 10 }}>
                            {/* 總結數據 */}
                            <Text style={styles.text}>{translate('NOTE.TOTAL_DATA.TOTAL')}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                {/** 剩餘的卡路里 */}
                                <Text style={styles.text}>{translate('NOTE.TOTAL_DATA.R_KCAL')}</Text>
                                <Text style={styles.text}>{'1500'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                {/** 攝取的卡路里 */}
                                <Text style={styles.text}>{translate('NOTE.TOTAL_DATA.EAT_KCAL')}</Text>
                                <Text style={styles.text}>{'0'}</Text>
                            </View>
                            <View style={styles.horizontalSeparator} />
                            {/** 0 % 的RDA */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{translate('NOTE.TOTAL_DATA.RDA')}</Text>
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
                                <Image source={require('../../assets/594846.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                <Text style={styles.text}>{translate('NOTE.GRAPH.CARBOHYDARE') + '52%'}</Text>
                            </View>
                            <View style={styles.leftContent}>
                                <Image source={require('../../assets/5111178.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                <Text style={styles.text}>{translate('NOTE.GRAPH.FAT') + '24%'}</Text>
                            </View>
                            <View style={styles.leftContent}>
                                <Image source={require('../../assets/5853933.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                <Text style={styles.text}>{translate('NOTE.GRAPH.PROTEIN') + '24%'}</Text>
                            </View>
                        </View>
                        <DonutPieChart />
                    </View>
                    <View style={styles.horizontalSeparator} />
                    {/** 脂肪 */}
                    <Text style={styles.text}>{translate('NOTE.GRAPH.FAT') + '10.00克'}</Text>
                    {/** 膽固醇 */}
                    <Text style={styles.text}>{translate('NOTE.DATA.CHOLESTEROL') + '0毫克'}:</Text>
                    {/** 鈉 */}
                    <Text style={styles.text}>{translate('NOTE.DATA.NA') + '0毫克'}</Text>
                    {/** 碳水化合物 */}
                    <Text style={styles.text}>{translate('NOTE.GRAPH.CARBOHYDARE') + '0.00克'}</Text>
                    {/** 膳食纖維 */}
                    <Text style={styles.text}>{translate('NOTE.DATA.DIETARY_FIBER') + '0.0克'}</Text>
                    {/** 糖 */}
                    <Text style={styles.text}>{translate('NOTE.DATA.SUGAR') + '0.00克'}</Text>
                    {/** 蛋白質 */}
                    <Text style={styles.text}>{translate('NOTE.GRAPH.PROTEIN') + '20.10克'}</Text>
                    <View style={styles.horizontalSeparator} />
                </View>
            </ScrollView>
        </Fragment >
    );
}

Note.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    })
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