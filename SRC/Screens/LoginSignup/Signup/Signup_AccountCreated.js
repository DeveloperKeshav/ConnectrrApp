import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { containerFull, goback, hr80, logo1, row } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/formcss';


const Signup_AccountCreated = ({ navigation }) => {
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
      <View style={row}>
        <MaterialCommunityIcons name="check-decagram" size={30} color="#76b83c" />
        <Text style={formHead2}>Account Created Successfully</Text>
      </View>


      <Text style={formbtn}
        onPress={() => navigation.navigate
          ('Login')}
      >
        Let's Roll
      </Text>
    </View>
  )
}

export default Signup_AccountCreated

const styles = StyleSheet.create({})