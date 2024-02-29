import React, { useCallback, useMemo, useState } from 'react';
import { Fragment } from 'react';
import { TouchableOpacity, Modal, ScrollView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements';
import News from './News';

export default function AlertBox() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);


    //const buttons = ['收件箱', '社群活動', '最新消息'];
    const buttons = useMemo(() => [
        { element: () => <Icon name="mail" size={20} color="#FFFFFF" />, title: '收件箱' },// 收件箱
        { element: () => <Icon name="group" size={20} color="#FFFFFF" />, title: '社群活動' },// 社群活動
        { element: () => <Icon name="menu-book" size={20} color="#FFFFFF" />, title: '最新消息' }// 最新消息
    ], []);

    const openBottomSheet = () => {
        setSelectedIndex(0);
        setIsVisible(true);
    };

    const closeBottomSheet = () => {
        setIsVisible(false);
    };

    const handleClick = useCallback((index) => {
        setSelectedIndex(index);
    }, []);

    return (
        <Fragment>
            <TouchableOpacity
                onPress={openBottomSheet}
            >
                <View style={styles.alert}>
                    <Icon name={'notifications-none'} size={30} color={'#FFFFFF'} />
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={closeBottomSheet}

            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={closeBottomSheet} style={styles.closeButton}>
                                <Icon name="close" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={styles.title}>{buttons[selectedIndex].title}</Text>
                        </View>
                        <ButtonGroup
                            onPress={(index) => handleClick(index)}
                            selectedIndex={selectedIndex}
                            buttons={buttons.map(button => button.element())}
                            containerStyle={styles.containerStyle}
                            selectedButtonStyle={styles.selectedButtonStyle}
                            textStyle={styles.textStyle} // 未选中按钮的文字颜色
                        />
                        <ScrollView>
                            <Text style={{color:'#888888'}}>App 新的特色</Text>
                            <News />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    alert: {
        backgroundColor: '#AAAAAA',
        borderRadius: 20,
        width: 40,
        height: 40,
        paddingTop: 4,
        marginLeft: 15,
        marginRight: 15
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#444444',
        height: '90%', // 设置高度为屏幕高度的50%
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    closeButton: {
        position: 'absolute',
        left: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    containerStyle: {
        height: 42,
        borderColor: '#00DD00',
        borderWidth: 1.5,
        borderRadius: 20,
        backgroundColor: '#666666'
    },
    selectedButtonStyle: {
        backgroundColor: '#00AA55' // 选中按钮的背景颜色
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});