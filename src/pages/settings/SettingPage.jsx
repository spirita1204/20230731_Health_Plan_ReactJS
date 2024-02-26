import React from 'react';
import { Fragment } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import ArrowButton from '../../common/components/Button/ArrowButton';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

export default function SettingPage() {

    return (
        <Fragment>
            <ScrollView style={styles.container}>
                <Text style={styles.text1}>設定</Text>
                <Text style={styles.text2}>帳戶</Text>
                {/* 帳號管理 */}
                <ArrowButton
                    title={'帳號管理'}
                />
                <Text style={styles.text2}>偏好設定</Text>
                {/* 地區 */}
                <ArrowButton
                    title={'地區'}
                    subTitle={'台灣'}
                    borderTopRadius
                />
                {/* 應用程式語言 */}
                <ArrowButton
                    title={'應用程式語言'}
                    subTitle={'中文(繁體)'}
                    borderBottomRadius
                />
                <Text style={styles.text2}>社區</Text>
                {/* 分享我的 : 體重，日誌和月曆  */}
                <ArrowButton
                    title={'分享我的 : 體重，日誌和月曆'}
                    subTitle={'只允許我的關注者看見'}
                    borderTopRadius
                />
                {/* 允許留言 */}
                <ArrowButton
                    title={'允許留言'}
                    borderBottomRadius
                />
                <Text style={styles.text2}>日記</Text>
                {/* 熱量單位 */}
                <ArrowButton
                    title={'熱量單位'}
                    subTitle={'卡路里'}
                    borderTopRadius
                />
                {/* 重量單位 */}
                <ArrowButton
                    title={'重量單位'}
                    subTitle={'公斤/千克'}
                    borderTopRadius
                    borderBottomRadius
                />
                {/* RDA */}
                <ArrowButton
                    title={'RDA'}
                    subTitle={'1500卡路里'}
                    borderTopRadius
                    borderBottomRadius
                />
                {/* 客製化餐點 */}
                <ArrowButton
                    title={'客製化餐點'}
                    borderTopRadius
                    borderBottomRadius
                />
                {/* 飲水攝取量 */}
                <ArrowButton
                    title={'飲水攝取量'}
                    borderTopRadius
                    borderBottomRadius
                />
                {/* 運動日記 */}
                <ArrowButton
                    title={'運動日記'}
                    borderTopRadius
                    borderBottomRadius
                />
                {/* 應用程式和裝置 */}
                <ArrowButton
                    title={'應用程式和裝置'}
                    subTitle={'HealthPlan'}
                    borderTopRadius
                    borderBottomRadius
                />
                {/* Google Fit */}
                <ArrowButton
                    title={'Google Fit'}
                    borderBottomRadius
                />
                {/* 登出 */}
                <View style={{ marginTop: 25, marginBottom: 25 }}>
                    <Button
                        title={'登出'}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                    />
                </View>
            </ScrollView>

        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444444'
    },
    text1: {
        fontWeight: 'bold', // 加粗
        marginLeft: 25,
        margin: 15,
        fontSize: 20,
        color: '#FFFFFF'
    },
    text2: {
        fontWeight: 'bold', // 加粗
        marginLeft: 25,
        margin: 8,
        fontSize: 15,
        color: '#FFFFFF'
    },
    button: {
        borderColor: '#00DD00',
        borderWidth: 2,
        backgroundColor: '#666666',
        borderRadius: 10,
        height: 50,
        marginLeft: 25,
        marginRight: 25,
    },
    buttonText: {
        color: '#00DD00',
        fontWeight: 'bold', // 加粗
        fontSize: 16, // 字体大小
    }
});