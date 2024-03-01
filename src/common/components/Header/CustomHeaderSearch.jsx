import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * 客製化照搜尋按鈕
 * @returns 
 */
const CustomHeaderSearch = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('Foods');
    };

    return (
        <TouchableOpacity
            onPress={handleBackPress}
            style={{
                marginRight: 15, // Adjust the left margin to move it to the right
                marginTop: 5, // Adjust the top margin to move it down
                marginLeft: 10
            }}
        >
            <Icon name="search" size={28} color="#FFFFFF" />
        </TouchableOpacity>
    );
};
export default CustomHeaderSearch;