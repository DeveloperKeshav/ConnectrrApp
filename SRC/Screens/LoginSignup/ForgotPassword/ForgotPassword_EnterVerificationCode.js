import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';
const ForgotPassword_EnterVerificationCode = ({ navigation, route }) => {
  const { useremail, userVerificationCode } = route.params;
  //console.log(useremail, userVerificationCode)

  const [verificationCode, setVerificationCode] = React.useState('');


  const handleVerificationCode = () => {

    if (verificationCode != userVerificationCode) {
      alert('Invalid Verification Code')
    }
    else {
      alert('Verification Code Matched')
      navigation.navigate('ForgotPassword_ChoosePassword', { email: useremail })
    }

    // navigation.navigate('ForgotPassword_ChoosePassword')
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
      <Text style={formHead3}>A verification code has been sent on your email</Text>
      <TextInput placeholder='Enter 6-digit code' style={formInput}
        onChangeText={(text) => setVerificationCode(text)}
      />
      {
        loading ? <ActivityIndicator size="large" color="white" /> :
          <Text style={formbtn}
            onPress={() => handleVerificationCode()}
          >
            Next
          </Text>
      }

    </View>
  )
}

export default ForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})