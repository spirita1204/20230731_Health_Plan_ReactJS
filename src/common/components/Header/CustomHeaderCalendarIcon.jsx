import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * 客製化日曆按鈕
 * @returns 
 */
const CustomHeaderCalendarIcon = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        console.log('calendar!!!');
    };

    return (
        <TouchableOpacity
            onPress={handleBackPress}
            style={{
                marginRight: 10, // Adjust the left margin to move it to the right
                marginTop: 5, // Adjust the top margin to move it down
            }}
        >
            <Icon name="event-available" size={28} color="#FFFFFF" />
        </TouchableOpacity>
    );
};
export default CustomHeaderCalendarIcon;