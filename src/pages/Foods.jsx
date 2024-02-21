import React, { useCallback, useState, Fragment, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';
import ListInfo from '../common/components/ListInfo';
import PropTypes from 'prop-types';
import SearchHistory from '../common/components/SearchHistory';
import ImageList from '../common/components/ImageList';
import { FoodContext } from '../common/contexts/FoodContext';

/**
 * 食譜
 * @returns
 */
const FirstRoute = () => (
    <View style={styles.imageListContainer}>
        <ImageList></ImageList>
    </View>
);

/**
 * 食物
 * @returns
 */
const SecondRoute = ({ searchText, updateSearch, translate }) => (
    <ScrollView style={styles.container}>
        {/** 搜尋框 */}
        <SearchBar
            // 搜尋食物
            placeholder={translate('FOOD.PLACE_HOLDER.SEARCH_FOOD')}
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
        {/** 近期搜尋資料 */}
        <SearchHistory></SearchHistory>
        <SearchHistory></SearchHistory>
        <SearchHistory></SearchHistory>
        <SearchHistory></SearchHistory>
        <SearchHistory></SearchHistory>
    </ScrollView>
);

SecondRoute.propTypes = {
    searchText: PropTypes.string,
    updateSearch: PropTypes.func,
    translate: PropTypes.func,
};

/**
 * 最近吃過的
 * @returns
 */
const ThirdRoute = () => (
    <ScrollView style={styles.container}>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
    </ScrollView>
);

/**
 * 經常吃的
 * @returns
 */
const ForthRoute = () => (
    <ScrollView style={styles.container}>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
        <ListInfo></ListInfo>
    </ScrollView>
);

// 設定tabBar顏色
const renderTabBar = (props) => (
    <TabBar
        {...props}// 顯示props.navigationStateroutes 資訊[食譜, 食物, 最近吃過, 經常吃的]
        style={{ backgroundColor: '#888888' }}
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
    const [index, setIndex] = useState(0);

    const layout = useWindowDimensions();

    // 交易畫面共用資料以及函數
    const {
        translate
    } = useContext(FoodContext);

    const routes = [
        { key: 'first', title: translate('FOOD.TITLE.RECIPE') }, // 食譜
        { key: 'second', title: translate('FOOD.TITLE.FOOD') },// 食物
        { key: 'third', title: translate('FOOD.TITLE.RECENT_ATE') },// 最近吃過
        { key: 'forth', title: translate('FOOD.TITLE.OFTEN_EAT') }// 經常吃的
    ];

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute />;
            case 'second':
                // 透過傳遞參數方式 避免每次組件渲染造成SearchBar重新回到初始狀態
                return <SecondRoute
                    searchText={searchText}
                    updateSearch={updateSearch}
                    translate={translate}
                />;
            case 'third':
                return <ThirdRoute />;
            case 'forth':
                return <ForthRoute />;
            default:
                return <FirstRoute />;
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
    );
}

const styles = StyleSheet.create({
    imageListContainer: {
        paddingTop: 7,
        backgroundColor: '#444444'
    },
    container: {
        padding: 10, // Add padding around the content
        backgroundColor: '#444444'
    }
});