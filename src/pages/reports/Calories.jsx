import React from 'react';
import { Fragment } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

function EatedFood({ food, times, calories }) {
    return (
        <View style={styles.content}>
            <View style={{ flex: 3 }}>
                <Text style={styles.subTitle}>{food}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.subTitle}>{'x' + times + ' ='}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.subTitle}>{calories}</Text>
            </View>
        </View>
    );
}


export default function Calories() {
    return (
        <Fragment>
            <View style={{ ...styles.container2 }}>
                <View style={styles.header}>
                    <Text style={styles.title}>已攝取的食物</Text>
                    <View style={styles.content}>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.subTitle}>食物</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.subTitle}>攝取次數</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.subTitle}>大卡</Text>
                            <Text style={styles.subTitle}>(千卡)</Text>
                        </View>
                    </View>
                    <View style={styles.horizontalSeparator} />
                    <EatedFood
                        food={'奕順軒'}
                        times={'3'}
                        calories={'156'}
                    />
                    <View style={styles.horizontalSeparator} />
                </View>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
    },
    container2: {
        backgroundColor: '#666666',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizontalSeparator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
        marginHorizontal: 3
    },
});