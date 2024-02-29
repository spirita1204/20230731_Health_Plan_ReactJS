import React from 'react';
import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';

export default function News({ date, context, image, href }) {
    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.horzional}>
                    <Icon name={'new-releases'} color={'#FF7744'} size={10}></Icon>
                    <Text style={styles.header}>App特色</Text>
                    <Text style={styles.date}>．2023年07月</Text>
                </View>
                <Text style={styles.header2}>新語言上線</Text>
                <Text style={styles.header3}>現在HealthPlan應用程式已提供烏克蘭語</Text>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: 'https://i1.poltava.to/uploads/2022/03/2022-03-17/visit-ukraine-today.jpg' }}>
                </Image>
                <Text style={styles.context}>在最新的更新當中，HealthPlan應用程式的所有功能現都以支援烏克蘭語，這項更新為我們的烏克蘭語使用者提供了更直觀、更熟悉的應用程式體驗。</Text>
            </View>
        </Fragment>
    );
}

PropTypes.propTypes = {
    date: PropTypes.string.isRequired,
    context: PropTypes.string,
    imhrefage: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
        borderRadius: 5
    },
    horzional: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row'
    },
    header: {
        color: '#FF7744',
        marginLeft: 5
    },
    header2: {
        color: '#FFFFFF',
        marginLeft: 5,
        fontSize: 12
    },
    header3: {
        color: '#FFFFFF',
        marginLeft: 5,
        fontSize: 12,
        fontWeight: 'bold'
    },
    context: {
        color: '#888888',
        marginLeft: 5,
        fontSize: 12
    },
    date: {
        color: '#FFFFFF'
    }
});