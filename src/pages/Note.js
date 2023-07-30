import React from 'react'
import { Fragment } from 'react'
import LongPressButton from '../common/components/LongPressButton'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Image, ScrollView } from 'react-native';

export default function Note() {
    return (
        <Fragment>
            <ScrollView>
                <View style={styles.container}>
                    <LongPressButton
                        leftLogo={require('../../assets/english-breakfast.png')}
                        leftText={' 早餐'}
                        rightLogo={require('../../assets/plus.png')}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/lunch-time.png')}
                        leftText={' 午餐'}
                        rightLogo={require('../../assets/plus.png')}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/christmas-dinner.png')}
                        leftText={' 晚餐'}
                        rightLogo={require('../../assets/plus.png')}
                    ></LongPressButton>
                    <LongPressButton
                        leftLogo={require('../../assets/sweets.png')}
                        leftText={' 點心'}
                        rightLogo={require('../../assets/plus.png')}
                    ></LongPressButton>
                    <View style={styles.horizontalSeparator} />
                    <Text>{'總結數據'}</Text>
                    <Text>{'剩餘的卡路里          1500'}</Text>
                    <Text>{'攝取的卡路里             0'}</Text>
                    <View style={styles.horizontalSeparator} />
                    <Text>{'0 % 的RDA               1500'}</Text>
                    <View style={styles.horizontalSeparator} />
                    <View style={styles.leftContent}>
                        <Image source={require('../../assets/594846.png')} style={{ width: 15, height: 15 }} />
                        <Text>{' 碳水化合物: 52%'}</Text>
                    </View>
                    <View style={styles.leftContent}>
                        <Image source={require('../../assets/5111178.png')} style={{ width: 15, height: 15 }} />
                        <Text>{' 脂肪: 24%'}</Text>
                    </View>
                    <View style={styles.leftContent}>
                        <Image source={require('../../assets/5853933.png')} style={{ width: 15, height: 15 }} />
                        <Text>{' 蛋白質: 24%'}</Text>
                    </View>
                    <View style={styles.horizontalSeparator} />
                    <Text>{'脂肪: 10.00克'}</Text>
                    <Text>{'膽固醇:'}:</Text>
                    <Text>{'鈉: '}</Text>
                    <Text>{'碳水化合物: '}</Text>
                    <Text>{'膳食纖維: '}</Text>
                    <Text>{'糖'}</Text>
                    <Text>{'蛋白質: '}</Text>
                    <View style={styles.horizontalSeparator} />
                </View>
            </ScrollView>
        </Fragment>
    )
}
const styles = StyleSheet.create({
    horizontalSeparator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    container: {
        padding: 10, // Add padding around the content
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});