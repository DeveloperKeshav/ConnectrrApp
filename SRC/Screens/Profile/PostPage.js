import { StyleSheet, Text, View, StatusBar, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import nopic from '../../../assets/nopic.png'
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PostPage = ({ navigation, route }) => {
    const { user, post } = route.params;

    const [userdata, setUserdata] = React.useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const loaddata = async () => {
        fetch('http://192.168.0.103:3000/userposts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: user })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == 'User Found') {
                    setUserdata(data.user)

                    setLoading(false)
                }
                else {
                    navigation.navigate('MainPage')
                }
            })
            .catch(err => {
                // console.log(err)
                alert('Something Went Wrong')
                navigation.navigate('My_UserProfile')
            })
    }
    useEffect(() => {
        loaddata()
    }, [])
    //console.log(user)
    // console.log(post)


    console.log('data successfully called - ', userdata);
    return (
        <View style={styles.container}>
            {
                userdata ?
                    <View>
                        <Text style={styles.txt}>Posts</Text>
                        <View style={styles.c1}>

                            {
                                userdata.profilepic.length > 0 ?
                                    <Image style={styles.profilepic} source={{ uri: userdata.profilepic }} />
                                    :
                                    <Image style={styles.profilepic} source={nopic} />
                            }
                            <Text style={styles.usernamestyle}>@{userdata.username}</Text>

                        </View>
                        <View>
                            {
                                userdata.posts.length > 0 ?
                                    <ScrollView>
                                        {
                                            userdata.posts?.map(
                                                (item) => {
                                                    return (
                                                        <View style={styles.container}>
                                                            <Image style={styles.postimage} source={{ uri: item.post }} />
                                                        </View>
                                                    )
                                                }
                                            )
                                        }

                                    </ScrollView>
                                    :
                                    <Text>Data not found</Text>
                            }
                        </View>
                    </View>
                    :
                    <Text>Data not Found</Text>
            }
        </View>
    )


}

export default PostPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        // flexDirection: 'column',
        //height: 500,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 1,
    },
    c1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
    },
    profilepic: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 1,
    },
    usernamestyle: {
        color: '#ffffff',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    postimage: {
        width: '100%',
        aspectRatio: 1,
    },
    s2: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
    },
    s21: {
        // width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'black',
        alignItems: 'center',

    },
    txt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    notliked: {
        color: 'grey',
        marginLeft: 5,
        fontSize: 25,
    },
    iconliked: {
        color: '#d73265',
        fontSize: 30,
    },
    liked: {
        color: '#d73265',
        fontSize: 25,
        marginLeft: 5,
    },
    s22: {
        marginLeft: 20,
    },
    s3: {
        width: '100%',
        backgroundColor: '#111111',
    },
    commentuser: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    commenttext: {
        color: 'gray',
        fontSize: 17,
        marginLeft: 5,
    },
    s31: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,

    },
    location: {
        color: 'white',
    },
    usernameview: {
        marginLeft: 5,
    },
})