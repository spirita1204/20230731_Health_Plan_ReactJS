import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { FoodContext } from '../../contexts/FoodContext';

/**
 * 客製化照相機按鈕
 * @returns 
 */
const CustomHeaderCamera = () => {
    const navigation = useNavigation();

    // 交易畫面共用資料以及函數
    const {
        translate,
        saveSelect
    } = useContext(FoodContext);
    console.log(saveSelect, 'saveSelect');

    const handleBackPress = () => {
        console.log('camera!!!');
    };

    return (
        <TouchableOpacity
            onPress={handleBackPress}
            style={{
                marginRight: 15, // Adjust the left margin to move it to the right
                marginTop: 5, // Adjust the top margin to move it down
            }}
        >
            <Icon name="linked-camera" size={28} color="#00DD00" />
        </TouchableOpacity>
    );
};
export default CustomHeaderCamera;