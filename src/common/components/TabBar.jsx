import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
// Page
import Home from '../../pages/Home';
import MyPlace from '../../pages/MyPlace';
import Note from '../../pages/Note';
import Premium from '../../pages/Premium';
import Report from '../../pages/Report';
// import { default as Note } from '../../entries/note'; // 使用别名 Note
// Header
import CustomHeaderCalendar from './Header/CustomHeaderCalendar';
import Avatar from './Avatar';
import IconBox from './IconBox';
// Provider
import { HomeProvider } from '../contexts/HomeContext';
import { MyPlaceProvider } from '../contexts/MyPlaceContext';
import { NoteProvider } from '../contexts/NoteContext';
import { ReportProvider } from '../contexts/ReportContext';
import { PremiumProvider } from '../contexts/PremiumContext';

// 包Wrapper
function HomeWrapper() {
    return (
        <HomeProvider>
            <Home />
        </HomeProvider>
    );
}
function MyPlaceWrapper() {
    return (
        <MyPlaceProvider>
            <MyPlace />
        </MyPlaceProvider>
    );
}
function NoteWrapper({ navigation }) {
    return (
        <NoteProvider>
            <Note navigation={navigation} />
        </NoteProvider>
    );
}
NoteWrapper.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};
function ReportWrapper() {
    return (
        <ReportProvider>
            <Report />
        </ReportProvider>
    );
}
function PremiumWrapper() {
    return (
        <PremiumProvider>
            <Premium />
        </PremiumProvider>
    );
}

export default function TabBar() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Hides the header for each screen
                tabBarStyle: {
                    backgroundColor: '#888888',
                },
                tabBarIcon: ({ focused, color, size }) => { //focused為連結到該頁面的意思
                    let iconPath;
                    let iconSize;
                    let iconTop;
                    if (route.name === '首頁') {
                        iconPath = focused
                            ? require('../../../assets/home.png') :
                            require('../../../assets/home.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name === '我') {
                        iconPath = focused
                            ? require('../../../assets/user.png') :
                            require('../../../assets/user.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == '日記') {
                        iconPath = focused
                            ? require('../../../assets/calendar.png') :
                            require('../../../assets/calendar.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == '報告') {
                        iconPath = focused
                            ? require('../../../assets/chart-histogram.png') :
                            require('../../../assets/chart-histogram.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == '進階版') {
                        iconPath = focused
                            ? require('../../../assets/dollar.png') :
                            require('../../../assets/dollar.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    }
                    return (
                        <Image
                            style={{
                                width: iconSize,
                                height: iconSize,
                                top: iconTop,
                                zIndex: 10
                            }}
                            source={iconPath}
                        />
                    );
                },
                tabBarLabel: ({ focused, color }) => {
                    let showFont;
                    if (route.name === '首頁') {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name === '我') {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name == '日記') {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name == '報告') {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name == '進階版') {
                        showFont = focused ? 'none' : 'flex';
                    }
                    return (
                        <Text style={{
                            fontSize: 12,
                            marginTop: 9,
                            marginBottom: 7,
                            padding: 0,
                            display: showFont,
                            color: '#DDDDDD',

                        }} >
                            {route.name}
                        </Text>
                    );
                },
            })}
        >
            <Tab.Screen
                name="首頁"
                component={HomeWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <Fragment>
                            <View style={styles.horizontal}>
                                {/* 個人資訊 */}
                                <Avatar />
                                {/* 提醒按鈕 */}
                                <IconBox
                                    logo={'notifications-none'}
                                    onPress={() => console.log('abc')}
                                />
                            </View>
                        </Fragment>
                    ),
                    headerStyle: {
                        backgroundColor: '#444444', // 設置標題背景顏色
                    },
                    headerTitle: () => null, // 不顯示標題
                }}
            />
            <Tab.Screen
                name="我"
                component={MyPlaceWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <View style={styles.horizontal}>
                            {/* 個人資訊 */}
                            <Avatar />
                            {/* 提醒按鈕 */}
                            <IconBox
                                logo={'notifications-none'}
                                onPress={() => console.log('abc')}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <Fragment>
                            {/* 設定 */}
                            <IconBox
                                logo={'settings'}
                                onPress={() => console.log('abc')}
                            />
                        </Fragment>
                    ),
                    headerStyle: {
                        backgroundColor: '#444444', // 設置標題背景顏色
                    },
                    headerTitle: () => null, // 不顯示標題
                }}
            />
            <Tab.Screen
                name="日記"
                component={NoteWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <CustomHeaderCalendar /> // 小日曆
                    ),
                    headerStyle: {
                        backgroundColor: '#444444', // 設置標題背景顏色
                    },
                    headerTitle: () => null, // 不顯示標題
                }}
            />
            <Tab.Screen
                name="報告"
                component={ReportWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <View style={styles.horizontal}>
                            {/* 個人資訊 */}
                            <Avatar />
                            {/* 提醒按鈕 */}
                            <IconBox
                                logo={'notifications-none'}
                                onPress={() => console.log('abc')}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <Fragment>
                            {/* 目標 */}
                            <IconBox
                                logo={'track-changes'}
                                onPress={() => console.log('abc')}
                            />
                        </Fragment>
                    ),
                    headerStyle: {
                        backgroundColor: '#444444', // 設置標題背景顏色
                    },
                    headerTitle: () => null, // 不顯示標題
                }}
            />
            <Tab.Screen
                name="進階版"
                component={PremiumWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerStyle: {
                        backgroundColor: '#444444', // 設置標題背景顏色
                    },
                    headerStatusBarHeight: 0, // 讓header空間為0 = 消失
                    headerTitle: () => null, // 不顯示標題
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666'
    },
    horizontal: {
        flexDirection: 'row'
    }
});