import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead, formHead3 } from '../../CommonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings1 = ({ navigation }) => {

    const logout = () => {
        AsyncStorage.removeItem('user').then(() => {
            navigation.navigate('Login')
        })
    }
    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}
                onPress={() => navigation.navigate('My_UserProfile')}
            />
            <Text style={formHead}>Settings</Text>

            <Text style={styles.txt1} onPress={
                () => navigation.navigate('EditProfile')
            }>Edit Profile</Text>

            <Text style={styles.txt1} onPress={
                () => navigation.navigate('ChangePassword')
            }>Change Password</Text>

            <Text style={styles.txt1}>Customer support</Text>

            <Text style={styles.txt1} onPress={
                () => logout()
            }>Log out</Text>


        </View>
    )
}

export default Settings1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    gohomeicon: {
        //  position: 'absolute',
        top: 5,
        left: 10,
        zIndex: 100,
        color: 'white',
        fontSize: 30,
    },
    txt1: {
        marginTop: 20,
        marginLeft: 10,
        color: 'white',
        fontSize: 18,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,

    }
})