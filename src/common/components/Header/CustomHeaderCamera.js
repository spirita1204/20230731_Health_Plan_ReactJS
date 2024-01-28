import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * 客製化照相機按鈕
 * @returns 
 */
const CustomHeaderCamera = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        console.log('camera!!!');
    };

    return (
        <TouchableOpacity
            onPress={handleBackPress}
            style={{
                marginRight: 10, // Adjust the left margin to move it to the right
                marginTop: 5, // Adjust the top margin to move it down
            }}
        >
            <Icon name="linked-camera" size={30} color="#00DD00" />
        </TouchableOpacity>
    );
};
export default CustomHeaderCamera
