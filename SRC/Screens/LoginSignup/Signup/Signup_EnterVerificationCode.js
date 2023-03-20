import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';
const Signup_EnterVerificationCode = ({ navigation, route }) => {
  const { useremail, userVerificationCode } = route.params
  // console.log(useremail, userVerificationCode)


  const [verificationCode, setVerificationCode] = useState('')

  const handleVerificationCode = () => {
    // navigation.navigate  ('Signup_ChooseUsername')
    if (verificationCode != userVerificationCode) {
      alert('Invalid Verification Code')
    }
    else if (verificationCode == userVerificationCode) {
      alert('Verification Successfully')
      navigation.navigate('Signup_ChooseUsername', { email: useremail })
    }
    else {
      alert('Please try again')
    }
  }

  return (
    <View style={containerFull}>

      <TouchableOpacity onPress={() => navigation.navigate("Signup_EnterEmail")} style={goback} >
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
      <Text style={formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder='Enter 6-digit code here' style={formInput}
        onChangeText={(text) => setVerificationCode(text)}
      />

      <Text style={formbtn}
        onPress={() => handleVerificationCode()}
      >
        Next
      </Text>

    </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})