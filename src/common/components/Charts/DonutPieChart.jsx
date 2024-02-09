import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default function DonutPieChart() {
    const widthAndHeight = 80;
    const series = [123, 321, 123];
    const sliceColor = ['#54BBFF', '#FFBC5A', '#FF77AB'];

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#444444'}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        margin: 10,
    },
});