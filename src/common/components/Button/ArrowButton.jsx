import React from 'react';
import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, Text } from 'react-native';

export default function ArrowButton({ title, subTitle, bold, logo, onPress, borderTopRadius, borderBottomRadius }) {
    return (
        <Fragment>
            <TouchableOpacity onPress={onPress}>
                <View style={
                    (borderTopRadius && borderBottomRadius) ?
                        {
                            ...styles.container,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0
                        }
                        :
                        (borderTopRadius)
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

                    <View style={styles.buttonContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            {logo && <Icon name={logo} style={styles.icon} size={styles.buttonText.fontSize * 1.5} color={'#444444'} />}
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={bold ? { ...styles.buttonText, fontWeight: 'bold' } : { ...styles.buttonText }}>{title}</Text>
                                {subTitle && <Text style={styles.buttonText2}>{subTitle}</Text>}
                            </View>
                        </View>
                        <Icon name="navigate-next" size={styles.buttonText.fontSize * 1.5} color={'#444444'} />
                    </View>
                </View>
            </TouchableOpacity>
        </Fragment>
    );
}

ArrowButton.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    bold: PropTypes.bool,
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
        fontSize: 15, // 字体大小
    },
    buttonText2: {
        color: '#00DD00',
        fontSize: 15, // 字体大小
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1 // Add this line
    },
    icon: {
        marginRight: 8
    },
});