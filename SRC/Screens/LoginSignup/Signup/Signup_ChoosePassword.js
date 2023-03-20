import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';


const Signup_ChoosePassword = ({ navigation, route }) => {
    const { email, username } = route.params;
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handlePassword = () => {
        // navigation.navigate('Signup_AccountCreated')
        if (password == '' || confirmpassword == '') {
            alert('Please enter password')
        } else if (password != confirmpassword) {
            alert('Password does not match')
        }
        else {
            setLoading(true)
            fetch('http://192.168.0.103:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            })
                .then(res => res.json()).then(
                    data => {
                        if (data.message === "User registered successfully") {
                            setLoading(false)
                            alert(data.message);
                            navigation.navigate('Login')
                        }
                        else {
                            setLoading(false)
                            alert('Please try again')
                        }
                    }
                )
        }
    }

    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup_ChooseUsername")} style={goback} >
                < Ionicons name="arrow-back" size={24} color="gray" />
                {/*<Text style={{
                    color: 'gray',
                    fontSize: 16,
                    marginLeft: 5,
                    fontWeight: 'bold'

                    }}>
                    Go Back
                    </Text>*/}
            </TouchableOpacity>
            <Image source={logo} style={logo1} />
            <Text style={formHead2}>Choose a strong password</Text>
            <TextInput placeholder='Enter password' style={formInput} secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput placeholder='Confirm password' style={formInput} secureTextEntry
                onChangeText={(text) => setConfirmpassword(text)}
            />

            <Text style={formbtn}
                onPress={() => handlePassword()}
            >
                Next
            </Text>
        </View>
    )
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})