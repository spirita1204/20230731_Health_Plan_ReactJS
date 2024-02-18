import React from 'react';
import i18n from '../common/i18n/i18n';
import PropTypes from 'prop-types';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// providers
// import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { NoteProvider } from '../common/contexts/NoteContext';
// router
import Router from '../common/routes';
import Note from '../pages/Note';
// txn
import CustomHeaderLeft from '../common/components/Header/CustomHeaderLeft';
import CustomHeaderModal from '../common/components/Header/CustomHeaderModal';
import CustomHeaderCamera from '../common/components/Header/CustomHeaderCamera';
import Foods from '../pages/Foods';
import HomePage from '../pages/HomePage';

function WrapPage() {

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
                    name="HomePage"
                    component={HomePage}
                    options={{ headerShown: false }} // 隐藏头部
                />
                <Stack.Screen
                    name="Foods"
                    component={Foods}
                    options={{
                        // 客製化打叉叉按鈕
                        headerLeft: () => <CustomHeaderLeft />,
                        // 可調整[早餐, 午餐, 晚餐, 點心]
                        headerTitle: () => <CustomHeaderModal />,
                        // 照相機
                        headerRight: () => <CustomHeaderCamera />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default WrapPage;