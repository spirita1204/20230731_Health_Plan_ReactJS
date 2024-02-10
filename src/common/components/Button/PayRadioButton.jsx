import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text, TouchableRipple } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function PayRadioButton({ monthText, priceText, savingsText, recommended, checked, onPress }) {

    return (
        <View style={checked
            ? {
                ...styles.container,
                borderColor: '#00DD00',
                borderWidth: 3,
                backgroundColor: '#227700'
            }
            : styles.container}
        >
            {/** 當物件被選中 外框被成粗綠框 */}
            <TouchableRipple onPress={onPress}>
                <View style={styles.radioButtonContainer}>
                    <RadioButton
                        uncheckedColor='#FFFFFF'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={onPress}
                        color={'#FFFFFF'} // 设置选中状态的颜色为绿色
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.monthText}>{monthText}</Text>
                        <Text style={styles.priceText}>{priceText}</Text>
                        {savingsText &&
                            <View style={[styles.savingsContainer]}>
                                <Text style={styles.savingsText}>{savingsText}</Text>
                            </View>
                        }
                    </View>
                    {recommended &&
                        <View style={
                            checked
                                ? {
                                    ...styles.recommendedContainer,
                                    backgroundColor: '#00DD00'
                                }
                                : styles.recommendedContainer
                        }>
                            <Text style={styles.recommendedText}>推薦</Text>
                        </View>
                    }
                </View>
            </TouchableRipple>
        </View>
    );
}

PayRadioButton.propTypes = {
    monthText: PropTypes.string.isRequired,
    priceText: PropTypes.string.isRequired,
    savingsText: PropTypes.string,
    recommended: PropTypes.bool,
    checked: PropTypes.bool,
    onPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: '#AAAAAA',
        borderRadius: 10,
        margin: 4,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#666666'
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
    },
    monthText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceText: {
        color: 'white',
        fontSize: 16,
        marginTop: 4,
    },
    savingsContainer: {
        marginTop: 4,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
    },
    savingsText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    recommendedContainer: {
        width: 60,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#AAAAAA', // 推薦框框的背景颜色
        justifyContent: 'center',
        alignItems: 'center',
    },
    recommendedText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
});