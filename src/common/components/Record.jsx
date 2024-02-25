import React from 'react';
import { Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Record({ rowDatas }) {

    return (
        <Fragment>
            {rowDatas.map((e, index) => (
                <Fragment key={index}>
                    <View style={styles.container}>
                        <View style={styles.container2}>
                            {/* 日期 */}
                            <Text style={styles.text1}>{e.DATE}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text2}>體重紀錄 : </Text>
                                <Text style={styles.text2}>{e.WEIGHT_RECORD + ' 公斤'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text2}>目前減少 : </Text>
                                <Text style={styles.text2}>{e.REDUCE_WEIGHT + ' 公斤'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text2}>還剩 : </Text>
                                <Text style={styles.text3}>{e.LAVE + ' 公斤'}</Text>
                            </View>
                        </View>
                    </View>
                </Fragment>
            ))}
        </Fragment>
    );
}

Record.propTypes = {
    rowDatas: PropTypes.arrayOf(
        PropTypes.shape({
            DATE: PropTypes.string.isRequired,
            WEIGHT_RECORD: PropTypes.string.isRequired,
            REDUCE_WEIGHT: PropTypes.string.isRequired,
            LAVE: PropTypes.string.isRequired,
        })
    )
};

Record.defaultProps = {
    rowDatas: [
        {
            DATE: '2024年02月24日',
            WEIGHT_RECORD: '72',
            REDUCE_WEIGHT: '4',
            LAVE: '6'
        },
        {
            DATE: '2024年02月20日',
            WEIGHT_RECORD: '70',
            REDUCE_WEIGHT: '7',
            LAVE: '4'
        },
        {
            DATE: '2024年02月20日',
            WEIGHT_RECORD: '70',
            REDUCE_WEIGHT: '7',
            LAVE: '4'
        },
        {
            DATE: '2024年02月20日',
            WEIGHT_RECORD: '70',
            REDUCE_WEIGHT: '7',
            LAVE: '4'
        },
        {
            DATE: '2024年02月20日',
            WEIGHT_RECORD: '70',
            REDUCE_WEIGHT: '7',
            LAVE: '4'
        },
        {
            DATE: '2024年02月20日',
            WEIGHT_RECORD: '70',
            REDUCE_WEIGHT: '7',
            LAVE: '4'
        }
    ]
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#666666',
    },
    container2: {
        marginTop: 10,
        marginBottom: 10,
        width: '35%'
    },
    text1: {
        color: '#00DD00',
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 12,
    },
    text2: {
        color: '#FFFFFF',
        marginLeft: 15,
        fontSize: 12,
    },
    text3: {
        color: '#00BBFF',
        fontSize: 12,
    },
});