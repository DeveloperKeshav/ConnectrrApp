import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';


const ForgotPassword_ChoosePassword = ({ navigation, route }) => {
    const { email } = route.params;
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handlePasswordChange = () => {
        if (password == '' || confirmpassword == '') {
            alert('Please enter password')
        } else if (password != confirmpassword) {
            alert('Password does not match')
        }

        else {
            setLoading(true);
            fetch('http://192.168.0.103:3000/resetpassword', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })
                .then(res => res.json()).then(
                    data => {
                        if (data.message === "Password Changed Successfully") {
                            setLoading(false)
                            alert(data.message);
                            navigation.navigate('ForgotPassword_AccountRecovered')
                        }
                        else {
                            setLoading(false)
                            alert("Something went wrong");
                        }
                    })
                .catch(err => {
                    setLoading(false);
                    alert(err)
                })
        }

        // navigation.navigate('ForgotPassword_AccountRecovered')
    }
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword_EnterEmail")} style={goback} >
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
                onChangeText={(text) => setpassword(text)}
            />
            <TextInput placeholder='Confirm password' style={formInput} secureTextEntry
                onChangeText={(text) => setconfirmpassword(text)}
            />

            {
                loading ? <ActivityIndicator size="large" color="white" /> :
                    <Text style={formbtn}
                        onPress={() => handlePasswordChange()}
                    >
                        Next
                    </Text>
            }

        </View>
    )
}

export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})