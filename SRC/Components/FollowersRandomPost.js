import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Cards/Post_Big_Card'

const FollowersRandomPost = () => {

    let data = [
        {
            id: 1,
            username: "Keshav_123",
            image: 'https://images.pexels.com/photos/3972136/pexels-photo-3972136.jpeg',
            profile_pic: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            likes: [
                "Adesh",
                "bhushan",
            ],
            comments: [
                {
                    id: 1,
                    username: 'adesh_123',
                    comment: 'nice post',
                },
                {
                    id: 2,
                    username: 'bhushan_123',
                    comment: 'Awosome',
                },
            ],
        },
        {
            id: 2,
            username: "Adesh_123",
            image: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            profile_pic: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            likes: [
                "keshav",
                "bhushan",
            ],
            comments: [
                {
                    id: 1,
                    username: 'keshav_123',
                    comment: 'nice post',
                },
                {
                    id: 2,
                    username: 'bhushan_123',
                    comment: 'makkhan bhava',
                },
            ],
        },
        {
            id: 3,
            username: "Bhushan_123",
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            profile_pic: 'https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            likes: [
                "Adesh",
                "Keshav",
            ],
            comments: [
                {
                    id: 1,
                    username: 'adesh_123',
                    comment: 'nice post',
                },
                {
                    id: 2,
                    username: 'keshav_123',
                    comment: 'keep it up bhushan',
                },
            ],
        },
    ]
    return (
        <ScrollView style={styles.container}>
            {
                data.map((item) => {
                    return (
                        <Post_Big_Card
                            key={item.id}
                            username={item.username}
                            profile_pic={item.profile_pic}
                            post_pic={item.image}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    }
})