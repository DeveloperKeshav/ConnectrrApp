import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import logo from '../../../../assets/logo.png'
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/formcss'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Signup_EnterEmail = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const handleEmail = () => {
    // setLoading(true)
    // navigation.navigate('Signup_EnterVerificationCode')
    if (email == '') {
      alert('Please enter email')
    }
    else {
      setLoading(true)
      // fetch('http://10.0.2.2:3000/verify', {   //use only for web or amulator
      fetch('http://192.168.0.103:3000/verify', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      })
        .then(res => res.json()).then(
          data => {
            if (data.error === "Invalid Credentials") {
              // alert('Invalid Credentials')
              alert('Invalid Credentials')
              setLoading(false)
            }
            else if (data.message === "Verification Code Sent to your Email") {
              setLoading(false)
              alert(data.message);
              navigation.navigate('Signup_EnterVerificationCode', {
                useremail: data.email,
                userVerificationCode: data.VerficationCode
              })

            }
          }
        )
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
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter Your Email' type="email" style={formInput}
        onChangeText={(text) => {
          setEmail(text)
        }}
      />

      {
        loading ?
          <ActivityIndicator size="large" color="white" />
          :
          <Text style={formbtn}
            onPress={() => handleEmail()}
          >
            Next
          </Text>
      }

      <View style={hr80}></View>

      <Text style={formTextLinkCenter}>
        Already you have an account?
        <Text style={{ color: 'white' }}
          onPress={() => navigation.navigate
            ('Login')}
        > Login </Text>
      </Text>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})