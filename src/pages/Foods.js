import React, { useCallback, useState } from 'react'
import { Fragment } from 'react';
import SearchBox from '../common/components/SearchBox';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

/**
 * 食譜
 * @returns 
 */
const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: styles.container.backgroundColor }} />
);

/**
 * 食物
 * @returns 
 */
const SecondRoute = ({ searchText, updateSearch }) => (
    <ScrollView style={styles.container}>
        {/** 搜尋框 */}
        <SearchBar
            placeholder="搜尋食物"
            onChangeText={updateSearch}
            value={searchText}
            // 字體顏色
            inputStyle={{ color: '#FFFFFF' }}
            containerStyle={{
                backgroundColor: styles.container.backgroundColor,
                borderWidth: 0, // Set border width to 0 to remove the default border
                borderBottomColor: styles.container.backgroundColor,
                borderTopColor: styles.container.backgroundColor
            }}
            inputContainerStyle={{
                borderRadius: 15
            }}
        />
    </ScrollView>
);

/**
 * 最近吃過的
 * @returns 
 */
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: styles.container.backgroundColor }} />
);

/**
 * 經常吃的
 * @returns 
 */
const ForthRoute = () => (
    <View style={{ flex: 1, backgroundColor: styles.container.backgroundColor }} />
);

// 設定tabBar顏色
const renderTabBar = (props) => (
    <TabBar
        {...props}
        style={{ backgroundColor: '#888888', }}
        indicatorStyle={{
            backgroundColor: '#FFFFFF',
            height: 3
        }}
    />
);

export default function Foods() {
    const route = useRoute();
    console.log(route?.params?.choose, 'route');

    const [searchText, setSearchText] = useState('');
    const [index, setIndex] = React.useState(0);

    const layout = useWindowDimensions();

    const [routes] = React.useState([
        { key: 'first', title: '食譜' },
        { key: 'second', title: '食物' },
        { key: 'third', title: '最近吃過' },
        { key: 'forth', title: '經常吃的' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute />;
            case 'second':
                // 透過傳遞參數方式 避免每次組件渲染造成SearchBar重新回到初始狀態
                return <SecondRoute searchText={searchText} updateSearch={updateSearch} />;
            case 'third':
                return <ThirdRoute />;
            case 'forth':
                return <ForthRoute />;
            default:
                return null;
        }
    };

    const updateSearch = useCallback((search) => {
        setSearchText(search);
    }, []);

    return (
        <Fragment>
            {/** 滾動Tab */}
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10, // Add padding around the content
        backgroundColor: '#444444'
    },
});