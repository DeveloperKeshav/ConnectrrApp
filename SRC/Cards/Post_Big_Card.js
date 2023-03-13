import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/pagecss';
import { FontAwesome } from '@expo/vector-icons';

const Post_Big_Card = (
    {
        post_pic,
        profile_pic,
        username,
        likes,
        comments,
    }
) => {
    //console.log(username)
    const [isliked, setIsliked] = useState(false)
    const [showcomments, setShowcomments] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.c1}>
                <Image source={{ uri: profile_pic }} style={styles.profilepic} />
                <Text style={styles.usernamestyle}>{username}</Text>
            </View>
            <Image source={{ uri: post_pic }} style={styles.postimage} />
            <View style={styles.s2}>
                {
                    isliked ?
                        <View style={styles.s21}>
                            <AntDesign name="heart" size={24} color="black" style={styles.iconliked} onPress={() => {
                                setIsliked(false)
                            }} />
                            <Text style={styles.liked}>{likes.length + 1}</Text>
                        </View>
                        :
                        <View style={styles.s21}>
                            <AntDesign name="hearto" size={24} color="white" style={icon1} onPress={() => {
                                setIsliked(true)
                            }} />
                            <Text style={styles.notliked}>{likes.length}</Text>
                        </View>
                }

                <View style={styles.s22}>
                    <FontAwesome name="comment" size={24} color="black" style={icon1} onPress={() => {
                        setShowcomments(!showcomments)
                    }} />
                </View>

            </View>

            {
                showcomments == true &&
                <View style={styles.s3}>
                    {
                        comments.map((item, index) => {
                            return (
                                <View style={styles.s31} key={item.id}>
                                    <Text style={styles.commentuser}>{item.username}</Text>
                                    <Text style={styles.commenttext}>{item.comment}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            }
        </View>
    )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        //height: 500,
        borderRadius: 10,
        marginVertical: 10,
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
})