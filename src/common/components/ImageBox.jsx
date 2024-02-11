import React from 'react';
import { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

export default function ImageBox({ title, content, uri, onPress }) {
    return (
        <Fragment>
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles.itemContainer}>
                    <Image source={{ uri: uri }} style={styles.itemImage} />
                    <Text style={styles.text1}>{title}</Text>
                    <Text style={styles.text2}>{content}</Text>
                    <View style={styles.horizontal}>
                        <Text style={styles.text3}>深入了解 </Text>
                        <Icon name="info-outline" size={18} color="#5599FF" style={{ marginTop: 2 }} />
                    </View>

                </View>
            </TouchableOpacity>
        </Fragment>
    );
};

ImageBox.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    uri: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 8,
        height: 280,
        overflow: 'hidden', // Hide any overflow
        position: 'relative',
        margin: 7, // Adjust spacing between items
    },
    itemImage: {
        width: '100%',
        height: '100%', // Adjust the height based on your preference
        borderRadius: 20,
        marginBottom: 0,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 4
    },
    text2: {
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 4
    },
    text3: {
        fontSize: 15,
        color: '#5599FF',
        marginTop: 4
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
});