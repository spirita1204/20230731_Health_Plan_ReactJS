import React from 'react';
import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';

export default function News({ date, header2, header3, context, image, href, onPress }) {
    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.horzional}>
                    <Icon name={'new-releases'} color={'#FF7744'} size={20}></Icon>
                    <Text style={styles.header}>App特色</Text>
                    <Text style={styles.date}>{'．' + date}</Text>
                </View>
                <Text style={styles.header2}>{header2}</Text>
                <Text style={styles.header3}>{header3}</Text>
                <Image
                    style={{ height: 150, margin: 10 }}
                    source={{ uri: image }}>
                </Image>
                <Text style={styles.context}>{context}</Text>
                {href && <Text onPress={onPress} style={styles.href}>{href}</Text>}
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
        borderRadius: 5,
        marginBottom: 10
    },
    horzional: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row'
    },
    header: {
        color: '#FF7744',
        marginLeft: 5,
        marginBottom: 2
    },
    header2: {
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 2
    },
    header3: {
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 12,
        fontWeight: 'bold',
    },
    context: {
        color: '#888888',
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 10
    },
    date: {
        color: '#888888'
    }, 
    href : {
        color: '#00DD00',
        marginBottom: 15,
        marginLeft: 10
    }
});