import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1 } from '../../CommonCss/pagecss'
import logo from '../../../assets/logo.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../CommonCss/formcss'

import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../../Firebase/Config';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
// firebase.initializeApp(environment.firebase);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



const UploadProfilePicture = ({ navigation }) => {

    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        // console.log(result)


        if (!result.canceled) {

            // const source = { uri: result.assets[0].uri };
            setImage(result.assets[0].uri);

            const response = await fetch(result.assets[0].uri);
            const blob = await response.blob();
            const filename = result.assets[0].uri.substring(result.assets[0].uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            //console.log(url)
            return url
        }
        else {
            return null
        }
    }

    const handleUpload = () => {
        //pickImage()
        AsyncStorage.getItem('user')
            .then(data => {
                setLoading(true)

                pickImage().then(url => {
                    fetch('http://192.168.0.103:3000/setprofilepic', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            profilepic: url
                        })
                    })
                        .then(res => res.json()).then(
                            data => {
                                if (data.message === "Profile picture updated successfully") {
                                    setLoading(false)
                                    alert('Profile picture updated successfully')
                                    navigation.navigate('Settings_1')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('Login')
                                }
                                else {
                                    setLoading(false)
                                    alert("Please Try Again");
                                }
                            }
                        )
                        .catch(err => {
                            console.log(err)
                        })

                })
            })
    }
    return (
        <View style={containerFull}>

            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={goback}>
                <Ionicons name="chevron-back-circle" size={30} color="white" />
            </TouchableOpacity>

            <Image source={logo} style={logo1} />
            <Text style={formHead2}>Choose a profile picture</Text>


            {
                loading ? <ActivityIndicator
                    size="large"
                    color="white"
                /> :
                    <Text style={formbtn}
                        onPress={() => handleUpload()}
                    >
                        Upload
                    </Text>
            }
        </View>
    )
}





export default UploadProfilePicture

const styles = StyleSheet.create({
    gohomeicon: {
        //  position: 'absolute',
        top: 5,
        left: 10,
        zIndex: 100,
        color: 'white',
        fontSize: 30,
    },
})