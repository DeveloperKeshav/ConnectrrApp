import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ChatCard = ({ chat }) => {
    return (
        <View style={styles.ChatCard}>
            <Image
                source={{ uri: chat.profileimage }}
                style={styles.image}
            />

            <View style={styles.c1} >
                <Text style={styles.username}>
                    {chat.username}
                </Text>
                <Text style={styles.lastmessage}>
                    {chat.lastmessage}
                </Text>
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