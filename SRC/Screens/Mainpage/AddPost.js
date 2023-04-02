import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1 } from '../../CommonCss/pagecss'
import logo from '../../../assets/logo.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../CommonCss/formcss'
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../../Firebase/Config'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
};
const AddPost = ({ navigation }) => {

    const [postdescription, setpostdescription] = useState('')

    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [post, setPost] = useState(null)


    const pickImage = async () => {
        // await this.askPermissionsAsync();
        setLoading1(true)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            VideoExportPreset: 1,
        })
        // console.log(result)


        if (!result.canceled) {
            const source = { uri: result.assets[0].uri };


            const response = await fetch(result.assets[0].uri);
            const blob = await response.blob();
            const filename = result.assets[0].uri.substring(result.assets[0].uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            setLoading1(false)
            setPost(url)
            // console.log(url)
        }
        else {
            setLoading1(false)
            setPost(null)
        }
    }
    const clickImage = async () => {
        await this.askPermissionsAsync();
        setLoading1(true)
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        })
        // console.log(result)


        if (!result.canceled) {
            const source = { uri: result.assets[0].uri };


            const response = await fetch(result.assets[0].uri);
            const blob = await response.blob();
            const filename = result.assets[0].uri.substring(result.assets[0].uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            setLoading1(false)
            setPost(url)
            // console.log(url)
        }
        else {
            setLoading1(false)
            setPost(null)
        }
    }

    const handleUpload = () => {

        if (post != null) {
            AsyncStorage.getItem('user')
                .then(data => {
                    setLoading2(true)

                    fetch('http://192.168.0.103:3000/addpost', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            post: post,
                            postdescription: postdescription
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message == 'Post added successfully') {
                                alert('Post added successfully')
                                setLoading2(false)
                                navigation.navigate('My_UserProfile')
                            }
                            else {
                                alert('Something went wrong, please try again')
                                setLoading2(false)
                            }
                        })
                })
        }
        else {
            alert('Please select an image')
        }
    }

    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('My_UserProfile')} style={goback}>
                <Ionicons name="chevron-back-circle" size={30} color="white" />
            </TouchableOpacity>

            <Image source={logo} style={logo1} />
            {
                loading1 ? <ActivityIndicator
                    size="large"
                    color="white"
                /> :
                    <>
                        <Text
                            style={formHead2}
                        >Add New Post</Text>

                        {
                            post ?
                                <TouchableOpacity
                                    onPress={() => pickImage()}
                                >
                                    <Image source={{ uri: post }} style={{
                                        width: 200, height: 200,
                                        marginVertical: 10,
                                    }} />
                                </TouchableOpacity>
                                :

                                <View style={styles.picimageview}>
                                    <View style={styles.picmyimage}>
                                        <MaterialCommunityIcons name="camera-burst" size={40} color="white" style={styles.addpost}
                                            onPress={() => {
                                                pickImage()
                                            }}
                                        />
                                        <Text style={styles.subtitle}>Gallery</Text>
                                    </View>
                                    <View style={styles.picmyimage}>
                                        <MaterialCommunityIcons name="camera-enhance" size={40} color="white" style={styles.addpost}
                                        // onPress={() => {
                                        //     clickImage()
                                        // }}
                                        />
                                        <Text style={styles.subtitle}>Camera</Text>
                                    </View>
                                </View>
                            // <Text style={styles.addpost}
                            //     onPress={() => {
                            //         pickImage()
                            //     }}
                            // >
                            //     Click here to select a new post
                            // </Text>
                        }
                    </>
            }



            {/*  */}
            <Text style={formHead2}>Change Description</Text>
            <TextInput placeholder="Description..." style={formInput}
                onChangeText={(text) => setpostdescription(text)}
                multiline={true}
                numberOfLines={5}
            />
            {
                loading2 ? <ActivityIndicator
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






export default AddPost

const styles = StyleSheet.create({
    addpost: {
        fontSize: 50,
        color: 'white',
        paddingHorizontal: 50,
    },
    picmyimage: {
        fontSize: 40,
        textAlign: 'center'
    },
    picimageview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        width: '80%',
        textAlign: 'center',
        marginVertical: 20,
        backgroundColor: '#111111',
    },
    subtitle: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 25,
    }
})
