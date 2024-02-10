import React from 'react';
import { Fragment, StyleSheet } from 'react';
//import { Text, View } from 'react-native';
//import { Provider as PaperProvider, RadioButton, TouchableRipple, useTheme } from 'react-native-paper';

export default function PayRadioButton() {
    //const theme = useTheme();

    return (
        <Fragment>
            {/* <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton.Android />
                            <View style={styles.textContainer}>
                                <Text style={styles.monthText}>12個 月</Text>
                                <Text style={styles.priceText}>$1,440.00</Text>
                                <View style={[styles.savingsContainer, { backgroundColor: theme.colors.error }]}>
                                    <Text style={styles.savingsText}>省下54%</Text>
                                </View>
                            </View>
                            <View style={styles.recommendedCircle} />
                        </View>
                    </TouchableRipple>
                </View>
            </PaperProvider> */}
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
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
      fontSize: 16,
      fontWeight: 'bold',
    },
    priceText: {
      fontSize: 14,
      marginTop: 4,
    },
    savingsContainer: {
      marginTop: 4,
      paddingVertical: 2,
      paddingHorizontal: 6,
      borderRadius: 4,
    },
    savingsText: {
      color: 'white',
      fontSize: 12,
    },
    recommendedCircle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#2196F3', // 推薦圈圈的颜色
    },
  });