import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import nopic from '../../assets/nopic.png'

const UserCard = ({ user, navigation }) => {
    return (
        <TouchableOpacity onPress={
            () => {
                navigation.navigate('Other_UserProfile', { user: user })
            }
        }>
            <View style={styles.ChatCard}>
                {
                    user.profilepic ? <Image
                        source={{ uri: user.profilepic }}
                        style={styles.image}
                    />
                        : <Image source={nopic} style={styles.image} />
                }

                <View style={styles.c1} >
                    <Text style={styles.username}>
                        {user.username}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserCard

const styles = StyleSheet.create({

    profileimage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    ChatCard: {
        width: '100%',
        // height: 40,
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