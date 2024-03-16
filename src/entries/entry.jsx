import React, { Fragment } from 'react';
import i18n from '../common/i18n/i18n';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// providers
import { I18nextProvider } from 'react-i18next';
import { FoodProvider } from '../common/contexts/FoodContext';
import { HomeProvider } from '../common/contexts/HomeContext';
import { MyPlaceProvider } from '../common/contexts/MyPlaceContext';
import { NoteProvider } from '../common/contexts/NoteContext';
import { ReportProvider } from '../common/contexts/ReportContext';
import { PremiumProvider } from '../common/contexts/PremiumContext';
// router
import Router from '../common/routes';
import Note from '../pages/Note';
import Home from '../pages/Home';
import MyPlace from '../pages/MyPlace';
import Report from '../pages/Report';
import Premium from '../pages/Premium';
// header 
import IconBox from '../common/components/IconBox';
import Avatar from '../common/components/Avatar';
import AlertBox from '../common/components/AlertBox';
// txn
import Foods from '../pages/Foods';
import SettingPage from '../pages/settings/SettingPage';
import AvatarPage from '../pages/avatars/AvatarPage';
import GoalPage from '../pages/goals/GoalPage';
// Navigate
import { useNavigation } from '@react-navigation/native';

function FoodsWrapper() {
    return (
        <FoodProvider>
            <Foods />
        </FoodProvider>
    );
}
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

function TabBar() {

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
                            ? require('../../assets/home_press.png') :
                            require('../../assets/home.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name === t('ROUTE_NAME.MYPLACE')) {
                        iconPath = focused
                            ? require('../../assets/user_press.png') :
                            require('../../assets/user.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == t('ROUTE_NAME.NOTE')) {
                        iconPath = focused
                            ? require('../../assets/calendar_press.png') :
                            require('../../assets/calendar.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == t('ROUTE_NAME.REPORT')) {
                        iconPath = focused
                            ? require('../../assets/chart-histogram_press.png') :
                            require('../../assets/chart-histogram.png');
                        iconSize = focused ? 30 : 24;
                        iconTop = focused ? 0 : 7.5;
                    } else if (route.name == t('ROUTE_NAME.PREMIUM')) {
                        iconPath = focused
                            ? require('../../assets/dollar_press.png') :
                            require('../../assets/dollar.png');
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

export default function WrapPage() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            {/* 在這裡建立了堆疊導航，用於處理不同頁面之間的導航。 */}
            {/* 首頁設定為 "Login" 頁面 */}
            <Stack.Navigator
                initialRouteName="Login"
                // 統一設定header顏色
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#444444'
                    },
                    headerTintColor: '#FFFFFF'
                }}
            >
                {/* <Stack.Screen name="Login" component={Login} /> */}
                <Stack.Screen
                    name="TabBar"
                    component={TabBar}
                    options={{ headerShown: false }} // 隐藏头部
                />
                <Stack.Screen
                    name="Foods"
                    component={FoodsWrapper}
                // 交給Food組件動態設定Option
                />
                <Stack.Screen
                    name="SettingPage"
                    component={SettingPage}
                    options={{
                        headerTitle: '設定',
                    }}
                />
                <Stack.Screen
                    name="AvatarPage"
                    component={AvatarPage}
                    options={{
                        headerTitle: '我的日記',
                    }}
                />
                <Stack.Screen
                    name="GoalPage"
                    component={GoalPage}
                    options={{
                        headerTitle: '我的目標',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row'
    }
});