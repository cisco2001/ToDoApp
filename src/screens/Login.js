import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign in</Text>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <View style={styles.refo}>
                <Text>Remember Me</Text>
                <Text>Forgot Password?</Text>
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={{color: 'white'}}>SIGN IN</Text>
                <EvilIcons name="arrow-right" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.center}>
                <Text>OR</Text>
                <TouchableOpacity style={styles.signUpSocial}>
                    <Text>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpSocial}>
                    <Text>Login with Facebook</Text>
                </TouchableOpacity>
                <Text>Don't have an account? Signup</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    },
    header: {
        color: '#120D26',
        fontWeight: 'bold',
        fontSize: 20,
    },
    input: {
        height: 56,
        borderWidth: 1,
        margin: 20,
        borderColor: '#E4DFDF',
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: '#FABB18',
        height: 58,
        margin: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpSocial: {
        backgroundColor: 'red',
        borderRadius: 5,
        height: 40,
        width: 200,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        alignItems: 'center',
    },
    refo: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
export default Login;