import React from 'react';
import { Fragment } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import useForm from '../../common/hooks/useForm';
import PropTypes from 'prop-types';

function TextInputWrapper({ text, onChangeText }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            style={{ ...styles.input, borderBottomColor: isFocused ? '#00DD00' : '#FFFFFF', }}
            value={text}
            onChangeText={onChangeText}
            keyboardType="numeric"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    );
}

TextInputWrapper.propTypes = {
    text: PropTypes.string,
    onChangeText: PropTypes.func,
};

export default function GoalPage() {

    const [formState, inputHandler] = useForm(
        {
            calories: { value: '' },                // 卡路里
            carbohydrate: { value: '' },            // 碳水化合物
            protein: { value: '' },                 // 蛋白質
            fat: { value: '' },                     // 脂肪
            fiber: { value: '' },                   // 纖維
            sugar: { value: '' },                   // 糖
            saturatedFat: { value: '' },            // 飽和脂肪
            polyunsaturatedFat: { value: '' },      // 多元不飽和脂肪
            monounsaturatedFa: { value: '' },       // 單元不飽和脂肪
            cholesterol: { value: '' },             // 膽固醇
            natrium: { value: '' },                 // 鈉
            Potassium: { value: '' },                // 鉀
        }
    );

    return (
        <Fragment>
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.header}>
                        <Text style={styles.title}>熱量目標值</Text>
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>卡路里</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                    text={formState.inputs.calories.value}
                                    onChangeText={(e) => { inputHandler('calories', e); }}
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>卡</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <Text style={styles.shadowText}>HealthPlan以你的每日建議攝取量(RDA)來計算出能達到你的理想體重的每日卡路里攝取目標。</Text>
                        <Text style={{ ...styles.title, textAlign: 'right', marginTop: 10 }}>計算我的RDA</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.header}>
                        <Text style={styles.title}>巨量營養素目標值</Text>
                        <View style={styles.textHorzontal}>
                            <View>
                                <Text style={styles.infoText}>碳水化合物</Text>
                                <Text style={styles.shadowText}>188克</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>%</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <View>
                                <Text style={styles.infoText}>蛋白質</Text>
                                <Text style={styles.shadowText}>75克</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>%</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <View>
                                <Text style={styles.infoText}>脂肪</Text>
                                <Text style={styles.shadowText}>50克</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>%</Text>
                            </View>
                        </View>
                        <Text style={{ ...styles.title, textAlign: 'right', marginTop: 10 }}>使用克數</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.header}>
                        <Text style={styles.title}>設定每日目標值</Text>
                        <Text style={styles.shadowText}>為一週內的不同天建立自訂目標值。</Text>
                        <View style={styles.horizontalSeparator} />

                        <TouchableOpacity
                            onPress={() => { }}
                            activeOpacity={0.1} // 这里设置了按下时的不透明度为 0.7
                        >
                            <View style={styles.buttonContainer}>
                                <Text style={{ ...styles.infoText, marginLeft: 10, }}>新增每日目標值</Text>
                                <Icon name="add" size={24} color="#00DD00" style={{ marginRight: 5 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ ...styles.container2, marginBottom: 10, }}>
                    <View style={styles.header}>
                        <Text style={styles.title}>其他營養目標值</Text>
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>纖維</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>糖</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>飽和脂肪</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>多元不飽和脂肪</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>單元不飽和脂肪</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>膽固醇</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>毫克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>鈉</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>毫克</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalSeparator} />
                        <View style={styles.textHorzontal}>
                            <Text style={styles.infoText}>鉀</Text>
                            <View style={styles.inputContainer}>
                                <TextInputWrapper
                                />
                            </View>
                            <View style={styles.unitContainer}>
                                <Text style={styles.infoText}>毫克</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Fragment >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444444',
        flex: 1,
    },
    container2: {
        backgroundColor: '#666666',
        marginTop: 10,
    },
    header: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 14,
        color: '#00DD00',
        marginTop: 5,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    infoText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    shadowText: {
        fontSize: 14,
        color: '#AAAAAA',
    },
    horizontalSeparator: {
        height: 1,
        backgroundColor: '#AAAAAA',
        marginVertical: 10,
        marginHorizontal: 3
    },
    input: {
        fontSize: 16,
        backgroundColor: '#444444',
        padding: 5,
        textAlign: 'right',
        width: 100,
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    inputContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#444444',
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    textHorzontal: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unitContainer: {
        width: 40,
        alignItems: 'center',
    },
});