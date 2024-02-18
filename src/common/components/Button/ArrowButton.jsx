import React from 'react';
import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, Text } from 'react-native';

export default function ArrowButton({ title, logo, onPress, borderTopRadius, borderBottomRadius }) {
    return (
        <Fragment>
            <View style={borderTopRadius
                ?
                {
                    ...styles.container,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }
                : (borderBottomRadius)
                    ? {
                        ...styles.container,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0
                    }
                    : {
                        ...styles.container,
                    }
            }>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.ButtonContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={logo} style={styles.icon} size={styles.buttonText.fontSize * 1.5} color={'#444444'} />
                            <Text style={styles.buttonText}>{title}</Text>
                        </View>
                        <Icon name="navigate-next" size={styles.buttonText.fontSize * 1.5} color={'#444444'} />
                    </View>
                </TouchableOpacity>
            </View>

        </Fragment>
    );
}

ArrowButton.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    onPress: PropTypes.func,
    borderTopRadius: PropTypes.bool,
    borderBottomRadius: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderWidth: 2,
        borderColor: '#AAAAAA',
        borderRadius: 10,
        margin: 2,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#666666',
        height: 55,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold', // 加粗
        fontSize: 16, // 字体大小
    },
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        marginRight: 8
    },
});