import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * 客製化打叉叉按鈕
 * @returns 
 */
const CustomHeaderLeft = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('TabBar');
    };

    return (
        <TouchableOpacity
            onPress={handleBackPress}
            style={{
                marginLeft: 10, // Adjust the left margin to move it to the right
                marginTop: 5, // Adjust the top margin to move it down
            }}
        >
            <Icon name="close" size={30} color="#000000" />
        </TouchableOpacity>
    );
};
export default CustomHeaderLeft;