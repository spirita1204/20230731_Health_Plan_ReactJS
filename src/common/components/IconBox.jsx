import React from 'react';
import { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

export default function IconBox({ logo }) {
    const navigation = useNavigation();
    
    return (
        <Fragment>
            <TouchableOpacity
                onPress={() => { 
                    navigation.navigate('SettingPage');
                }}
            >
                <View style={styles.alert}>
                    <Icon name={logo} size={30} color={'#FFFFFF'} />
                </View>
            </TouchableOpacity>
        </Fragment>
    );
}

IconBox.propTypes = {
    logo: PropTypes.string,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    })
};

const styles = StyleSheet.create({
    alert: {
        backgroundColor: '#AAAAAA',
        borderRadius: 20,
        width: 40,
        height: 40,
        paddingTop: 4,
        marginLeft: 15,
        marginRight: 15
    }
});