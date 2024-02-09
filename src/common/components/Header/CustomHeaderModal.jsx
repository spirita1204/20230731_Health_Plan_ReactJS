import React, { useEffect, useReducer } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback, Button, SafeAreaView, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

/**
 * 可跳燈箱之視窗
 * 
 * @param {string} choose 
 * @returns 
 */
export default function CustomHeaderModal() {

    const route = useRoute();

    // 頁面初始狀態
    const initialState = {
        choose: 'BREAKFAST',
        // 表格狀態
        modal: {
            visible: false
        }
    };

    // 狀態變化處理函數
    const rHandler = {
        SET_CHOOSE: (state, action) => {
            return {
                // 複製當前狀態，只改變表格狀態
                ...state,
                // 複製當前表格狀態，只改變須調整狀態
                choose: action.payload
            };
        },
        OPEN_MODAL: (state, action) => {
            return {
                // 複製當前狀態，只改變表格狀態
                ...state,
                // 複製當前表格狀態，只改變須調整狀態
                modal: {
                    ...action.payload,
                }
            };
        },
    };

    // 狀態更新函數
    const reducer = (state, action) => (
        rHandler[action.type] ? rHandler[action.type](state, action) : state
    );

    const [state, dispatch] = useReducer(reducer, initialState);

    const closeModal = () => {
        dispatch({
            type: 'OPEN_MODAL',
            payload: {
                visible: false
            }
        });
    };

    /**
     * 從[早餐][午餐][晚餐][點心]哪個導過來 並顯示title
     * 
     * @param {string} choose 
     */
    const showChooseTitle = (choose) => {
        switch (choose) {
            case 'BREAKFAST':
                return '早餐';
            case 'LUNCH':
                return '午餐';
            case 'DINNER':
                return '晚餐';
            case 'SWEETS':
                return '小食/其他';
            default:
                return '早餐';
        }
    };

    const renderModalButton = () => {
        const menuItemsEng = ['BREAKFAST', 'LUNCH', 'DINNER', 'SWEETS'];

        return (
            // 在 render 方法中使用 map 生成多個 TouchableOpacity
            <View style={styles.modalButtonContainer}>
                {menuItemsEng.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            ...styles.modalButton,
                            borderTopLeftRadius: (index == 0) ? 10 : 0,  // 設定左上角的圓角
                            borderTopRightRadius: (index == 0) ? 10 : 0, // 設定右上角的圓角
                            borderBottomLeftRadius: (index == 3) ? 10 : 0,  // 設定左上角的圓角
                            borderBottomRightRadius: (index == 3) ? 10 : 0, // 設定右上角的圓角
                        }}
                        onPress={() => {
                            dispatch({
                                type: 'SET_CHOOSE',
                                payload: item
                            });
                            closeModal();
                        }}
                    >
                        <View style={styles.horizontal}>
                            <Text style={{ color: 'white', flex: 0.8 }}>{showChooseTitle(item)}</Text>
                            {state.choose == item &&
                                <Icon name="done" size={25} color="#00DD00" style={styles.arrowIcon} />}
                        </View>
                    </TouchableOpacity>
                ))}
            </View >
        );
    };

    useEffect(() => {
        dispatch({
            type: 'SET_CHOOSE',
            payload: route?.params?.choose
        });
    }, [route?.params?.choose]);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={state.modal.visible}
                onRequestClose={() => {
                    dispatch({
                        type: 'OPEN_MODAL',
                        payload: {
                            visible: !state.modal.visible
                        }
                    });
                }}
            >
                {/* 按Modal以外可關閉燈箱 */}
                <TouchableWithoutFeedback onPress={closeModal} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                {renderModalButton()}
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Pressable
                onPress={() =>
                    dispatch({
                        type: 'OPEN_MODAL',
                        payload: {
                            visible: true
                        }
                    })
                }
                style={styles.pressableContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textStyle}>{showChooseTitle(state.choose)}</Text>
                    <Icon name="keyboard-arrow-down" size={25} color="#AAAAAA" />
                </View>
                <Text style={styles.smallText}>星期日, 01月28日</Text>
            </Pressable>
        </View >
    );
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
        backgroundColor: '#666666',
        borderRadius: 10,
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
    arrowIcon: {
        marginLeft: 'auto',
    },
    smallText: {
        fontSize: 12,
        marginTop: 5,
        color: '#AAAAAA',
    },
    modalButton: {
        height: 50,
        width: 250,
        justifyContent: 'center', // 文字垂直居中
        alignItems: 'center', // 文字水平居中
        backgroundColor: '#888888',
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});