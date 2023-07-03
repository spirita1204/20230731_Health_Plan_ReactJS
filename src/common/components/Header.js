import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={styles.header}>
            <MaterialIcons
                name="menu"
                size={20}
                style={styles.icon}
                onPress={()=>console.log('aasssa')}
            />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require("../../../assets/piglogo.jpeg")}></Image>
                <Text style={styles.headerText}>健康規劃日誌</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        flexDirection: "row"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 17,
        color: "#333",
        letterSpacing: 1
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    icon: {
        position: "relative",
    }
});
