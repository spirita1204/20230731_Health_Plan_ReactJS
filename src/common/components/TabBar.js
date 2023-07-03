import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Defs, Symbol, Use } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

export default function TabBar() {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <TouchableOpacity style={styles.navLink}>
                        <Svg width={16} height={16}>
                            <Use xlinkHref="#home-icon" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={styles.navLink}>
                        <Svg width={16} height={16}>
                            <Use xlinkHref="#bookmark-icon" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={styles.navLink}>
                        <Svg width={16} height={16}>
                            <Use xlinkHref="#plus-icon" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={styles.navLink}>
                        <Svg width={16} height={16}>
                            <Use xlinkHref="#user-icon" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={styles.navLink}>
                        <Svg width={24} height={24}>
                            <Use xlinkHref="#settings-icon" />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.tubelight}>
                <View style={styles.lightRay} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    navItem: {
        marginRight: 16,
    },
    navLink: {
        padding: 8,
    },
    tubelight: {
        marginTop: 16,
        height: 40,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightRay: {
        width: 20,
        height: 20,
        backgroundColor: 'yellow',
    },
});
