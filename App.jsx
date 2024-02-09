import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import Foods from './src/pages/Foods';
import Note from './src/pages/Note';
import CustomHeaderLeft from './src/common/components/Header/CustomHeaderLeft';
import CustomHeaderModal from './src/common/components/Header/CustomHeaderModal';
import CustomHeaderCamera from './src/common/components/Header/CustomHeaderCamera';
import React from 'react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* 在這裡建立了堆疊導航，用於處理不同頁面之間的導航。 */}
      {/* 首頁設定為 "Login" 頁面 */}
      <Stack.Navigator
        initialRouteName="Login"
        // 統一設定header顏色
        screenOptions={{
          headerStyle: {
            backgroundColor: styles.backgroundColor
          },
          headerTintColor: styles.headerTintColor
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
        <Stack.Screen
          name="Note"
          component={Note}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTintColor: '#FFFFFF',
  backgroundColor: '#444444'
});

App.displayName = 'App';
export default App;
