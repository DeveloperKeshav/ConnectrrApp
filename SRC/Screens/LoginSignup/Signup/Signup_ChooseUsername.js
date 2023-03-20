import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';

const Signup_ChooseUsername = ({ navigation, route }) => {
  const { email } = route.params

  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUsername = () => {
    if (username == '') {
      alert('Please enter username')
    }
    else {
      setLoading(true)
      fetch('http://192.168.0.103:3000/changeusername', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          username: username
        })
      })
        .then(res => res.json()).then(
          data => {
            if (data.message === "Username available") {
              setLoading(false)
              alert('username has been set successful')
              navigation.navigate('Signup_ChoosePassword', {
                email: email,
                username: username
              })
            }
            else {
              setLoading(false)
              alert("Username not available");
            }
          }
        ).catch(err => {
          console.log(err)
        })
    }
    // navigation.navigate('Signup_ChoosePassword')
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
      <Text style={formHead2}>Choose a Username</Text>
      <TextInput placeholder='Enter a username' style={formInput}
        onChangeText={(text) => setUsername(text)}
      />

      {
        loading ? <ActivityIndicator size="large" color="white" /> :
          <Text style={formbtn}
            onPress={() => handleUsername()}
          >
            Next
          </Text>

      }
    </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})