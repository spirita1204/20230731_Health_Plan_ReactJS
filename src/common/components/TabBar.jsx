import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// Page
import Home from '../../pages/Home';
import MyPlace from '../../pages/MyPlace';
import Note from '../../pages/Note';
import Premium from '../../pages/Premium';
import Report from '../../pages/Report';
// import { default as Note } from '../../entries/note'; // 使用别名 Note
// Header
import CustomHeaderCalendar from './Header/CustomHeaderCalendar';
import CustomHeaderSearch from './Header/CustomHeaderSearch';
import CustomHeaderCalendarIcon from './Header/CustomHeaderCalendarIcon';
import Avatar from './Avatar';
import IconBox from './IconBox';
import AlertBox from './AlertBox';
// Provider
import { HomeProvider } from '../contexts/HomeContext';
import { MyPlaceProvider } from '../contexts/MyPlaceContext';
import { NoteProvider } from '../contexts/NoteContext';
import { ReportProvider } from '../contexts/ReportContext';
import { PremiumProvider } from '../contexts/PremiumContext';
// Navigate
import { useNavigation } from '@react-navigation/native';

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

    const navigation = useNavigation();
    // 多語系
    const { t } = useTranslation('common');

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Hides the header for each screen
                tabBarStyle: {
                    backgroundColor: '#666666',
                },
                tabBarIcon: ({ focused, color, size }) => { //focused為連結到該頁面的意思
                    let iconPath;
                    let iconSize;
                    let iconTop;
                    if (route.name === t('ROUTE_NAME.HOME')) {
                        iconPath = focused
                            ? require('../../../assets/home_press.png') :
                            require('../../../assets/home.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name === t('ROUTE_NAME.MYPLACE')) {
                        iconPath = focused
                            ? require('../../../assets/user_press.png') :
                            require('../../../assets/user.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == t('ROUTE_NAME.NOTE')) {
                        iconPath = focused
                            ? require('../../../assets/calendar_press.png') :
                            require('../../../assets/calendar.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == t('ROUTE_NAME.REPORT')) {
                        iconPath = focused
                            ? require('../../../assets/chart-histogram_press.png') :
                            require('../../../assets/chart-histogram.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == t('ROUTE_NAME.PREMIUM')) {
                        iconPath = focused
                            ? require('../../../assets/dollar_press.png') :
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
                    if (route.name === t('ROUTE_NAME.HOME')) {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name === t('ROUTE_NAME.MYPLACE')) {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name == t('ROUTE_NAME.NOTE')) {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name == t('ROUTE_NAME.REPORT')) {
                        showFont = focused ? 'none' : 'flex';
                    } else if (route.name == t('ROUTE_NAME.PREMIUM')) {
                        showFont = focused ? 'none' : 'flex';
                    }
                    return (
                        <Text style={{
                            fontSize: 12,
                            marginTop: 12,
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
                // 首頁
                name={t('ROUTE_NAME.HOME')}
                component={HomeWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <Fragment>
                            <View style={styles.horizontal}>
                                {/* 個人資訊 */}
                                <Avatar
                                    onPress={() => { navigation.navigate('AvatarPage'); }}
                                />
                                {/* 提醒按鈕 */}
                                <AlertBox />
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
                // 我
                name={t('ROUTE_NAME.MYPLACE')}
                component={MyPlaceWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <View style={styles.horizontal}>
                            {/* 個人資訊 */}
                            <Avatar
                                onPress={() => { navigation.navigate('AvatarPage'); }}
                            />
                            {/* 提醒按鈕 */}
                            <AlertBox />
                        </View>
                    ),
                    headerRight: () => (
                        <Fragment>
                            {/* 設定 */}
                            <IconBox
                                logo={'settings'}
                                onPress={() => { navigation.navigate('SettingPage'); }}
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
                // 日記
                name={t('ROUTE_NAME.NOTE')}
                component={NoteWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <CustomHeaderCalendar /> // 小日曆
                    ),
                    headerRight: () => (
                        <Fragment>
                            <View style={{ flexDirection: 'row' }}>
                                {/* 日曆按鈕 */}
                                <CustomHeaderCalendarIcon />
                                {/* 搜尋按鈕 */}
                                <CustomHeaderSearch />
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
                // 報告
                name={t('ROUTE_NAME.REPORT')}
                component={ReportWrapper}
                options={{
                    headerShown: true, // 顯示標題欄
                    headerLeft: () => (
                        <View style={styles.horizontal}>
                            {/* 個人資訊 */}
                            <Avatar
                                onPress={() => { navigation.navigate('AvatarPage'); }}
                            />
                            {/* 提醒按鈕 */}
                            <AlertBox />
                        </View>
                    ),
                    headerRight: () => (
                        <Fragment>
                            {/* 目標 */}
                            <IconBox
                                logo={'track-changes'}
                                onPress={() => { navigation.navigate('GoalPage'); }}
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
                // 進階版
                name={t('ROUTE_NAME.PREMIUM')}
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