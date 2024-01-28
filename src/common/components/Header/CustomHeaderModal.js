import React from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements';

/**
 * 可跳燈箱之視窗
 * @returns 
 */
export default function CustomHeaderModal() {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                {/* 按Modal以外可關閉燈箱 */}
                <TouchableWithoutFeedback onPress={closeModal} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText} onPress={closeModal}>早餐</Text>
                            <Text style={styles.modalText} onPress={closeModal}>午餐</Text>
                            <Text style={styles.modalText} onPress={closeModal}>晚餐</Text>
                            <Text style={styles.modalText} onPress={closeModal}>小食/其他</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)} style={styles.pressableContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textStyle}>早餐</Text>
                    <Icon name="keyboard-arrow-down" size={25} color="#AAAAAA" style={styles.arrowIcon} />
                </View>
                <Text style={styles.smallText}>星期日, 01月28日</Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 250, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        margin: 20,
        backgroundColor: '#888888',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pressableContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: -20,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    arrowIcon: {
        marginLeft: 'auto',
    },
    smallText: {
        fontSize: 12,
        marginTop: 5,
        color: '#AAAAAA',
    },
});