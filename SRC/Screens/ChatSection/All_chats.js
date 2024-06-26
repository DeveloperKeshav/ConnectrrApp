

import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead2 } from '../../CommonCss/formcss';
import ChatCard from '../../Cards/ChatCard';
import { searchbar } from '../../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';



const All_chats = ({ navigation }) => {

    // const [chats, setChats] = useState(null)

    const [keyword, setKeyword] = useState('')

    // console.log(keyword)

    const [userdata, setUserdata] = useState(null)
    useEffect(() => {
        loadchats()
    }, [])
    const loadchats = () => {
        AsyncStorage.getItem('user')
            .then(data => {
                // console.log('async userdata ', data)
                setUserdata(JSON.parse(data))
                let userid = JSON.parse(data).user._id;
                // console.log(userid)

                fetch('http://192.168.0.103:3000/getusermessages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userid: userid
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        data.sort((a, b) => {
                            if (a.date > b.date) {
                                return -1
                            }
                        })
                        setChats(data)
                    })
                    .catch(err => {
                        alert('Something went wrong')
                        setChats([])
                    })
            })
            .catch(err => alert(err))
    }
    let chats = [
        {
            username: 'adesh',
            lastmessage: 'hi',
            time: '12.00',
            profileimage: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            username: 'Keshav',
            lastmessage: 'hello',
            time: '1.00',
            profileimage: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            username: 'bhusan',
            lastmessage: 'by',
            time: '1.00',
            profileimage: 'https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }
    ]

    return (
        <ScrollView style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}
                onPress={() => navigation.navigate('MainPage')}
            />

            <View style={styles.c1} >
                <Text style={formHead2}> Your Chats</Text>
                <TextInput
                    style={searchbar}
                    placeholder="Search"
                    onChangeText={(text) => setKeyword(text)}
                />
            </View>

            <View style={styles.c2} >
                {
                    chats !== null && chats.filter(
                        (chat) => {
                            if (keyword == '') {
                                return chat
                            }
                            else if (
                                chat.username.toLowerCase().includes(keyword.toLowerCase())
                                ||
                                chat.lastmessage.toLowerCase().includes(keyword.toLowerCase())
                            ) {
                                return chat
                            }
                        }
                    ).map((chat) => {
                        return <ChatCard key={chat.fuserid} chat={chat} navigation={navigation} />
                    })
                }
            </View>
        </ScrollView>
    )
}


export default All_chats

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    gohomeicon: {
        position: 'absolute',
        top: 15,
        left: 25,
        zIndex: 10,
        color: 'white',
        fontSize: 30,
    },
    c1: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: '#111111',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },
    c2: {
        width: '100%',
        padding: 10
    }
})