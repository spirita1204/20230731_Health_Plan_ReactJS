import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './Header';
import Home from '../../pages/Home';
import Note from '../../pages/Note';

export default function TabBar() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Hides the header for each screen
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
                            style={{ width: iconSize, height: iconSize, top: iconTop, zIndex: 10 }}
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
                        <Text style={{ fontSize: 12, marginTop: 9, marginBottom: 7, padding: 0, display: showFont, color: '#707070' }} >
                            {route.name}
                        </Text>
                    );
                },
            })}
        >
            <Tab.Screen name="首頁" component={Home} />
            <Tab.Screen name="我" component={Header} />
            <Tab.Screen name="日記" component={Note} />
            <Tab.Screen name="報告" component={Header} />
            <Tab.Screen name="進階版" component={Header} />
        </Tab.Navigator>
    )
}