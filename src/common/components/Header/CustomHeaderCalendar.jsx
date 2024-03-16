import React, { useState, useEffect, useRef } from 'react';
import { Fragment } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Animated, // 動態呈現日曆
    Easing,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import PropTypes from 'prop-types';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { formateToday } from '../../utils/formatDate';

/**
 * 自定義配置 顯示中文日期(TODO)
 */
LocaleConfig.locales['tw'] = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日', '一', '二', '三', '四', '五', '六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
};
LocaleConfig.defaultLocale = 'tw';

CustomHeaderCalendar.propTypes = {
    selectedDate: PropTypes.string,
    setSelectedDate: PropTypes.func,
};

export default function CustomHeaderCalendar({selectedDate, setSelectedDate}) {

    // 用來定樣日曆以外透明區域座標buttom
    const [bottom, setBottom] = useState(-329);// -329
    // 日曆組件的高度(用來定樣日曆以外透明區域座標top)
    const [calendarHeight, setCalendarHeight] = useState(0);// 314.3333435058594
    // 是否顯示日曆
    const [showCalendar, setShowCalendar] = useState(false);

    // 獲取header的Ref
    const headerRef = useRef(null);
    // 定義動畫的ref
    const animation = useRef(new Animated.Value(0)).current;

    // 取得螢幕高度
    const { height: screenHeight } = Dimensions.get('window');
    // 取得tabBar高度
    const tabBarHeight = useBottomTabBarHeight();

    /**
     * 展開日曆
     */
    const expandCalendar = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,// 動畫將由原生代碼在主線程上運行，使更流暢的動畫和更好的性能
        }).start();
    };

    /**
     * 收闔日曆
     */
    const collapseCalendar = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    /**
     * 切换显示/隐藏日历下拉菜单状态
     */
    const handleBackPress = () => {
        const nowState = !showCalendar;
        setShowCalendar(nowState);

        if (nowState) {// 顯示
            expandCalendar();
        } else {// 隱藏
            collapseCalendar();
        }
    };

    /**
     *  選擇日期 怎改變當前顏色並回傳日期
     * 
     * @param {*String} date // 2024-02-09
     */
    const handleDateSelection = (date) => {
        setSelectedDate(date?.dateString);
        // 選完日期後隱藏日曆下拉菜單
        setShowCalendar(false);
        // 隱藏
        collapseCalendar();
    };

    /**
     * 產生格式格式 [2月, 星期四 22]
     * @param {*String} dateString 
     * @returns 
     */
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // 月份
        const month = (date.getMonth() + 1).toString(); // 月份从0开始，所以要加1
        const monthString = `${month}月`;

        // 星期几
        const weekday = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
        const weekdayString = `星期${weekday}`;

        // 日
        const day = date.getDate().toString().padStart(2, '0');

        return `${monthString}, ${weekdayString} ${day}`;
    };

    /**
     * 當選擇 [今天 昨天 明天] 顯示文字
     * 其他天顯示格式 [2月, 星期四 22]
     * 
     * @param {*String} date 
     */
    const showHeaderText = (dateString) => {
        const today = formateToday();
        const nextDate = formateToday(1);
        const preDate = formateToday(-1);

        switch (dateString) {
            case today:
                return '今天';
            case nextDate:
                return '明天';
            case preDate:
                return '昨天';
            default:
                return formatDate(dateString);
        }
    };

    const handleOutsidePress = () => {
        setShowCalendar(false); // 点击区域外部时收起日历组件
    };

    useEffect(() => {
        if (headerRef.current && showCalendar) {
            headerRef.current.measure((x, y, width, height) => {
                // 可用高度 = 螢幕高度 - header高度 - tabBar高度
                const avilHeight = screenHeight - height - tabBarHeight;
                // bottom 定義日曆透明區域範圍
                setBottom(calendarHeight - avilHeight);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calendarHeight, screenHeight, tabBarHeight]);

    return (
        <Fragment>
            <TouchableOpacity
                onPress={handleBackPress}
                style={{ flex: 1, justifyContent: 'center' }}//讓其覆蓋header 用於headerRef計算高度用
                ref={headerRef}
            >
                <View style={styles.horizontal}>
                    <Text style={styles.text}>{showHeaderText(selectedDate)}</Text>
                    <Text>    </Text>
                    <Icon name="signal-cellular-0-bar" style={styles.icon} size={10} color={styles.text.color} />
                </View>
            </TouchableOpacity>
            {/* {showCalendar && ( */}
            {/** 透過展開動畫方式呈現 showCalendar避免覆蓋到Note使其無法點擊*/}
            {showCalendar && <Animated.View
                onLayout={(event) => {
                    setCalendarHeight(event.nativeEvent.layout.height);
                }}
                style={[styles.calendarContainer,
                {
                    // Bind calendarHeight to animated value 
                    opacity: animation
                }]}>
                <Calendar
                    // Initially visible month. Default = now
                    initialDate={formateToday()}
                    markedDates={(formateToday() == selectedDate)// 日期當天不用mark 其他天mark淺色
                        ? {
                            [formateToday()]: { selected: true, selectedColor: '#FFFFFF', selectedTextColor: '#FF0000' },
                        }
                        : {
                            [formateToday()]: { selected: true, selectedColor: '#FFFFFF', selectedTextColor: '#FF0000' },
                            [selectedDate]: { selected: true, selectedColor: '#666666' } // 使用 selectedColor 属性设置选中日期的颜色
                        }}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={day => {
                        handleDateSelection(day);
                    }}
                    hideExtraDays={true}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={day => {
                        handleDateSelection(day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={month => {}}
                    firstDay={1}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}
                    // Replace default month and year title with custom one. the function receive a date as parameter
                    renderHeader={date => {
                        // Extract month and year from the provided date
                        const month = date.toString('MMM yyyy');
                        return (
                            <View>
                                <Text style={{ color: '#FFFFFF' }}>{month}</Text>
                            </View>
                        );
                    }}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                    theme={{
                        backgroundColor: '#444444', // Change the background color of the calendar
                        calendarBackground: '#444444', // Change the background color of the calendar
                        todayTextColor: '#FFFFFF',
                        dayTextColor: '#FFFFFF',
                        arrowColor: '#FFFFFF',
                        textDayFontSize: 15,
                        textMonthFontSize: 12,
                        textDayHeaderFontSize: 12,
                    }}
                    style={styles.calendar} // 设置圆角半径}
                />
                <TouchableOpacity
                    style={{ ...styles.touchableArea, top: calendarHeight, bottom: bottom }}
                    onPress={handleOutsidePress} // 手指按下，弹起
                    onPressIn={handleOutsidePress}// 手指按下，不弹起
                    activeOpacity={1}
                />
            </Animated.View>}
            {/* )} */}
        </Fragment>
    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 20, // Adjust the left margin to move it to the right
        marginTop: 0, // Adjust the top margin to move it down
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        transform: [{ rotate: '45deg' }]
    },
    calendarContainer: {
        position: 'absolute',
        top: 56, // Adjust this value to position the calendar below the header
        left: 0,
        zIndex: 1000, // Ensure the calendar is rendered above other components
        width: Dimensions.get('window').width, // Set the width to the window width
        borderColor: '#666666',
        borderBottomLeftRadius: 10, // 设置圆角半径
        borderBottomRightRadius: 10,
        borderWidth: 1,
    },
    calendar: {
        borderBottomLeftRadius: 10, // 设置圆角半径
        borderBottomRightRadius: 10
    },
    touchableArea: {
        position: 'absolute',
        // top: 313,// 642
        // bottom: -329,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: 999, // 确保透明区域在日历组件之上
    },
});