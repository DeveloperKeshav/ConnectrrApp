import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';
const ForgotPassword_EnterEmail = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmail = (text) => {
    // navigate('ForgotPassword_EnterVerificationCode')
    if (email === '') {
      alert('please enter email')
    }
    else {
      setLoading(true)
      fetch('http://192.168.0.103:3000/verifyfp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
        .then(res => res.json()).then(data => {
          if (data.error === "Invalid Credentials") {
            // alert('Invalid Credentials')
            alert('Invalid Credentials')
            setLoading(false)
          }
          else if (data.message === "Verification Code Sent to your Email") {
            setLoading(false)
            alert(data.message);
            navigation.navigate('ForgotPassword_EnterVerificationCode', {
              useremail: data.email,
              userVerificationCode: data.VerficationCode
            })

          }
        })
    }
  }

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
      <TextInput placeholder='Enter Your Email' style={formInput}
        onChangeText={(text) => setEmail(text)}
      />

      {
        loading ? <ActivityIndicator size="large" color="white" /> :
          <Text style={formbtn}
            onPress={() => handleEmail()}
          >
            Next
          </Text>
      }

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