import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import nopic from '../../assets/nopic.png'

const ChatCard = ({ chat, navigation }) => {
    console.log(chat.fuserid)
    let [fuserdata, setFuserdata] = React.useState(null);
    useEffect(() => {
        fetch('http://192.168.0.103:3000/getuserbyid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: chat.fuserid
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFuserdata(data)
            })
            .catch(err => {
                alert('Something went wrong')
                setFuserdata(null)
            })
    }, [])

    return (
        <View style={styles.ChatCard}>
            {
                fuserdata?.user?.profilepic ?
                    <Image source={{ uri: fuserdata?.user?.profilepic }} style={styles.image} />
                    :
                    <Image source={nopic} style={styles.image} />
            }

            <View style={styles.c1}>
                <Text style={styles.username} onPress={

                    () => {
                        navigation.navigate('MessagePage', {
                            fuseremail: fuserdata.user.email,
                            fuserid: fuserdata.user._id,
                        })
                    }

                }>{fuserdata?.user?.username}</Text>
                <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
            </View>
        </View>
    )
}

export default ChatCard

const styles = StyleSheet.create({
    ChatCard: {
        width: '100%',
        //height: 40,
        backgroundColor: '#111111',
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    username: {
        color: 'white',
    },
    c1: {
        marginLeft: 15,
    },
    lastmessage: {
        color: 'gray',
        fontSize: 14,
    }
})