import React, { useCallback, useState, Fragment, useContext, useEffect, useReducer, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';
import ListInfo, { ListInfos } from '../common/components/ListInfo';
import PropTypes from 'prop-types';
import SearchHistory from '../common/components/SearchHistory';
import ImageList from '../common/components/ImageList';
import { FoodContext } from '../common/contexts/FoodContext';
import api from '../common/services/foodsService';
import { ActivityIndicator } from 'react-native';

/**
 * 食譜
 * @returns
 */
const FirstRoute = ({ items }) => (
    <View style={styles.imageListContainer}>
        <ImageList
            items={items}
        />
    </View>
);
FirstRoute.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

/**
 * 食物
 * @returns
 */
const SecondRoute = ({ translate, onSubmitEditing, state, loading2 }) => {

    const [searchText, setSearchText] = useState('');
    /**
     * 當使用者輸入搜尋格
     */
    const updateSearch = useCallback((search) => {
        setSearchText(search);
    }, []);

    return (
        <Fragment>
            <View style={styles.container}>
                {/** 搜尋框 */}
                <SearchBar
                    // 搜尋食物
                    placeholder={translate('FOOD.PLACE_HOLDER.SEARCH_FOOD')}
                    onChangeText={updateSearch}
                    value={searchText}
                    onSubmitEditing={onSubmitEditing}// 捕獲使用者按下輸入法鍵盤上的Enter
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
                {loading2 ? ( // 如果請求還在進行中，顯示載入中的提示或者 loading spinner
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator size='large' color="#FFFFFF" />
                    </View>
                ) : (
                    <ScrollView>
                        <ListInfos
                            // 搜尋結果
                            datas={state.searchDatas}
                        />
                    </ScrollView>
                )}
                {/** 近期搜尋資料 */}
                {!state.initial && !loading2 &&
                    <Fragment>
                        <ScrollView>
                            <SearchHistory
                                title={'牛奶(2%脂肪，添加維他命A'}
                                onPressAndSearch={(title) => {
                                    setSearchText(title);
                                    onSubmitEditing();
                                }}
                                onPressAndPaste={(title) => { setSearchText(title); }}
                            />
                            <SearchHistory
                                title={'巧克力'}
                                onPressAndSearch={(title) => {
                                    setSearchText(title);
                                    onSubmitEditing();
                                }}
                                onPressAndPaste={(title) => { setSearchText(title); }}
                            />
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                            <SearchHistory></SearchHistory>
                        </ScrollView>
                    </Fragment>
                }
            </View>
        </Fragment>
    );
};
SecondRoute.propTypes = {
    translate: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    state: PropTypes.object,
    loading2: PropTypes.bool
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

    const [index, setIndex] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true); // 新增一個 loading 狀態來追蹤 API 請求是否完成
    const [loading2, setLoading2] = useState(false);

    const layout = useWindowDimensions();

    // 交易畫面共用資料以及函數
    const {
        translate
    } = useContext(FoodContext);

    // 頁面初始狀態
    const initialState = {
        initial: false,
        // 搜尋資料
        searchDatas: [],
    };

    // 狀態變化處理函數
    const rHandler = {
        SET_SEARCHDATA: (state, action) => {
            return {
                // 複製當前狀態，只改變表格狀態
                ...state,
                initial: true,
                // 複製當前表格狀態，只改變須調整狀態
                searchDatas: action.payload
            };
        },
    };

    // 狀態更新函數
    const reducer = (state, action) => (
        rHandler[action.type] ? rHandler[action.type](state, action) : state
    );

    const [state, dispatch] = useReducer(reducer, initialState);

    const routes = useMemo(() => [
        { key: 'first', title: translate('FOOD.TITLE.RECIPE') }, // 食譜
        { key: 'second', title: translate('FOOD.TITLE.FOOD') },// 食物
        { key: 'third', title: translate('FOOD.TITLE.RECENT_ATE') },// 最近吃過
        { key: 'forth', title: translate('FOOD.TITLE.OFTEN_EAT') }// 經常吃的
    ], [translate]);

    /**
     * 當使用者按下enter鍵
     */
    const onSubmitEditing = useCallback(() => {
        const handleApiResponse1 = (res, status) => {
            setLoading2(false); // 請求完成後將 loading 狀態設為 false
            if (status) {
                console.log('搜尋食物API成功');
                dispatch({
                    type: 'SET_SEARCHDATA',
                    payload: res?.searchFoods
                });
                console.log(res?.searchFoods, 'searchFoods');
            } else {
                console.log('搜尋食物API失敗');
            }
        };
        setLoading2(true);
        // 呼叫查詢帳號 API，並傳入成功回調函數和失敗回調函數
        api.searchFood(
            // 定義成功回調函數
            (res) => handleApiResponse1(res, true),
            // 定義失敗回調函數
            (res) => handleApiResponse1(res, false),
        );
    }, []);

    const renderScene = ({ route, jumpTo }) => {

        switch (route.key) {
            case 'first':
                return <FirstRoute
                    items={recipes}
                />;
            case 'second':
                // 透過傳遞參數方式 避免每次組件渲染造成SearchBar重新回到初始狀態
                return <SecondRoute
                    translate={translate}
                    onSubmitEditing={onSubmitEditing}
                    state={state}
                    loading2={loading2}
                />;
            case 'third':
                return <ThirdRoute />;
            case 'forth':
                return <ForthRoute />;
            default:
                return <FirstRoute />;
        }
    };

    useEffect(() => {
        console.log('取得食譜');

        const handleApiResponse = (res, status) => {
            setLoading(false); // 請求完成後將 loading 狀態設為 false
            if (status) {
                console.log('取得食譜API成功');
                const recipeInfos = res?.recipeInfos?.map((e) => ({
                    title: e.title,
                    time: e.time,
                    imageBase64: e.imageBase64
                }));
                setRecipes(recipeInfos);
            } else {
                console.log('取得食譜API失敗');
                setRecipes([]);
            }
        };

        // 呼叫查詢帳號 API，並傳入成功回調函數和失敗回調函數
        api.getRecipe(
            // 定義成功回調函數
            (res) => handleApiResponse(res, true),
            // 定義失敗回調函數
            (res) => handleApiResponse(res, false),
        );
    }, []);

    return (
        <Fragment>
            {loading ? ( // 如果請求還在進行中，顯示載入中的提示或者 loading spinner
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' color="#FFFFFF" />
                </View>
            ) : ( // 請求完成後顯示 TabView
                <TabView
                    style={{ backgroundColor: '#444444' }}
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            )}
        </Fragment>
    );
}

const styles = StyleSheet.create({
    imageListContainer: {
        paddingTop: 7,
        backgroundColor: '#444444',
        flex: 1
    },
    container: {
        padding: 10, // Add padding around the content
        backgroundColor: '#444444',
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444444', // 可以根據您的 UI 配色設置背景色
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});