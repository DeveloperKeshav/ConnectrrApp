import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';
const ForgotPassword_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={goback} >
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
      <Text style={formHead2}>Verify your email</Text>
      <TextInput placeholder='Enter Your Email' style={formInput} />

      <Text style={formbtn}
        onPress={() => navigation.navigate
          ('ForgotPassword_EnterVerificationCode')}
      >
        Next
      </Text>

      <View style={hr80}></View>

      <Text style={formTextLinkCenter}>
        Do you want to login?
        <Text style={{ color: 'white' }}
          onPress={() => navigation.navigate
            ('Login')}
        > Login </Text>
      </Text>
    </View>
  )
}

export default ForgotPassword_EnterEmail

const styles = StyleSheet.create({})