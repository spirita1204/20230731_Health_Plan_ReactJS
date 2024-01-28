import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from './src/common/components/Header';
import TabBar from './src/common/components/TabBar';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      {/* 在這裡建立了堆疊導航，用於處理不同頁面之間的導航。 */}
      {/* 首頁設定為 "Login" 頁面 */}
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}