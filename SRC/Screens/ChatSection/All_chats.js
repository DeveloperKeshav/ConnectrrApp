import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead2 } from '../../CommonCss/formcss';
import ChatCard from '../../Cards/ChatCard';
import { searchbar } from '../../CommonCss/pagecss';



const All_chats = ({ navigation }) => {
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

    const [keyword, setKeyword] = useState('')
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
                    chats.filter(
                        (chat) => {
                            if (keyword == '') {
                                return chat
                            }
                            else if (
                                chat.username.toLowerCase().includes(keyword.toLowerCase()) ||
                                chat.lastmessage.toLowerCase().includes(keyword.toLowerCase())
                            ) {
                                return chat
                            }
                        }
                    ).map((chat) => {
                        return <ChatCard key={chat.username} chat={chat} />
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