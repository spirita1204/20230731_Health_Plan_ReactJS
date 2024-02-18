import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import IconBox from './IconBox';

const Avatar = ({ imageUrl, headerHeight }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={(headerHeight) ? { ...styles.avatar, height: headerHeight } : styles.avatar}
                onPress={() => { console.log('aaa'); }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 50,
    }
});

Avatar.propTypes = {
    imageUrl: PropTypes.string,
    headerHeight: PropTypes.number
};

Avatar.defaultProps = {
    imageUrl: 'https://as1.ftcdn.net/v2/jpg/05/66/32/22/1000_F_566322234_dSK1t1yBKcBP3TWJOD4qTDKVnDjkjJo4.jpg',
    headerHeight: 40
};

export default Avatar;