import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { Fragment } from 'react';
const Login = ({ navigation }) => {
    const image = { uri: 'https://img-blog.csdnimg.cn/2cb54c4f2a43449f8270e00f5985861b.gif' };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('login');
        // 在這裡處理登入邏輯，這裡簡單地假設輸入正確即為登入成功
        if (username === 'daniel' && password === 'daniel13579') {
            navigation.navigate('HomePage');
        }
    };

    return (
        <Fragment>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                    <View style={styles.login}>

                        <View style={styles.loginForm}>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>帳號</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="請輸入帳號"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={username}
                                    onChangeText={setUsername}
                                />
                            </View>

                            <View style={styles.formGroup}>
                                <Text style={styles.label}>密碼</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="請輸入密碼"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                            </View>

                            <View style={styles.formGroup}>
                                <Button title="送出" onPress={handleLogin} />
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    login: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
    },
    loginHeader: {
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginForm: {},
    formGroup: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },

});

export default Login;