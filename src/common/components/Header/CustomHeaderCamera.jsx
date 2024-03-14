import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 客製化照相機按鈕
 * @returns 
 */
const CustomHeaderCamera = ({ selected, onPress }) => {
    const navigation = useNavigation();

    const renderCameraOrTick = useMemo(() => {
        return ((selected)
            //  打勾
            ?
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, marginRight: 10 }}>{selected}</Text>
                <Icon name="done" size={28} color="#FFFFFF" />
            </View>
            // 相機
            : <Icon name="linked-camera" size={28} color="#00DD00" />
        );
    }, [selected]);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginRight: 15, // Adjust the left margin to move it to the right
                marginTop: 5, // Adjust the top margin to move it down
            }}
        >
            {renderCameraOrTick}

        </TouchableOpacity>
    );
};

CustomHeaderCamera.propTypes = {
    selected: PropTypes.number,
    onPress: PropTypes.func
};

export default CustomHeaderCamera;