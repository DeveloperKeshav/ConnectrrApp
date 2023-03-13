import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';


const ForgotPassword_ChoosePassword = ({ navigation }) => {
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
            <TextInput placeholder='Enter password' style={formInput} secureTextEntry />
            <TextInput placeholder='Confirm password' style={formInput} secureTextEntry />

            <Text style={formbtn}
                onPress={() => navigation.navigate
                    ('ForgotPassword_AccountRecovered')}
            >
                Next
            </Text>
        </View>
    )
}

export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})