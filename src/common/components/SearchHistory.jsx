import React, { Fragment } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

SearchHistory.propTypes = {
    onPressAndSearch: PropTypes.func,
    onPressAndPaste: PropTypes.func,
    title: PropTypes.string
};

SearchHistory.defaultProps = {
    onPressAndSearch: () => { },
    onPressAndPaste: () => { },
    title: '乳清蛋白飲(鴛鴦奶茶)(果果堅果)'
};

export default function SearchHistory({ onPressAndSearch, onPressAndPaste, title }) {

    return (
        <Fragment>
            <TouchableOpacity
                onPress={() => onPressAndSearch(title)}
                style={{
                    marginRight: 0, // Adjust the left margin to move it to the right
                    // marginTop: 10, // Adjust the top margin to move it down
                    // marginBottom: 10,
                    borderBottomColor: '#FFFFFF',
                    borderTopColor: '#FFFFFF',
                    borderLeftColor: '#444444',
                    borderRightColor: '#444444',
                    borderWidth: 0.2,
                    padding: 12,
                }}
            >
                <View style={styles.space}>
                    <Icon name="schedule" size={25} color="#DDDDDD" />
                    <Text style={styles.textTop}>{title}</Text>
                    <Icon name="replay" size={25} color="#DDDDDD"
                        onPress={() => onPressAndPaste(title)}
                    />
                </View>
            </TouchableOpacity>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    textTop: {
        color: '#FFFFFF',
        textAlign: 'left'
    },
    textDown: {
        color: '#00DD00'
    },
    space: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    }
});