import React, { useState } from 'react'
import { Fragment } from 'react'
import { View, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import PropTypes from 'prop-types';

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

const formateToday = (addDay = 0) => {
    // Get current date
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + addDay);
    // Get year, month, and day
    const year = currentDate.getFullYear();
    // Month starts from 0 (January is 0, February is 1, etc.)
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month to match human-readable format
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Format the date as 'YYYY-MM-DD'
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export default function CustomHeaderCalendar() {

    const [showCalendar, setShowCalendar] = useState(true);
    const [selectedDate, setSelectedDate] = useState(formateToday());

    /**
     * 切换显示/隐藏日历下拉菜单状态
     */
    const handleBackPress = () => {
        setShowCalendar(!showCalendar);
    };

    /**
     *  選擇日期 怎改變當前顏色並回傳日期
     * 
     * @param {*String} date // 2024-02-09
     */
    const handleDateSelection = (date) => {
        console.log('Selected date:', date);
        setSelectedDate(date?.dateString);
        setShowCalendar(false); // 选完日期后隐藏日历下拉菜单
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
    }

    return (
        <Fragment>
            <TouchableOpacity
                onPress={handleBackPress}
            >
                <View style={styles.horizontal}>
                    <Text style={styles.text}>{showHeaderText(selectedDate)}</Text>
                    <Text>    </Text>
                    <Icon name="signal-cellular-0-bar" style={styles.icon} size={10} color={styles.text.color} />
                </View>
            </TouchableOpacity>
            {showCalendar && (
                <View style={styles.calendarContainer}>
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
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
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
                            //todayTextColor: '#FF8888',
                        }}
                        style={styles.calendar} // 设置圆角半径}
                    />
                </View>
            )}
        </Fragment>
    );
}

CustomHeaderCalendar.propTypes = {
    headerHeight: PropTypes.number
};

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
        borderBottomRightRadius: 10,
        //overflow: 'hidden', // 以确保圆角边框正确呈现

    },
});