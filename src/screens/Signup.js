import React from 'react';
import { Platform, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import Login from './Login';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Signup = ({navigation}) => {
    return (
        <View>
            {/*<AntDesign name="arrowleft" size={24} color="black" />
            <Text>Sign up</Text>
            */
            }
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={{color: 'white'}}>SIGN UP</Text>
                <EvilIcons name="arrow-right" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.center}>
                <Text>OR</Text>
                <Text>Already have an account?
                    <TouchableOpacity onPress={
                        () => navigation.navigate('Sign in')
                    }>
                        <Text style={{color: '#FABB18'}}>Sign in</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 56,
        borderWidth: 1,
        margin: 20,
        borderColor: '#E4DFDF',
        borderRadius: 5,
    },
    center: {
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: '#FABB18',
        height: 58,
        margin: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Signup;