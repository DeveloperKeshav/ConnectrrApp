
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const TestPage = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch user data
        fetch('http://192.168.0.103:3000/userposts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: user })
        })
            .then(response => response.json())
            .then(data => setUser(data));

        // Fetch user's posts
        fetch('http://192.168.0.103:3000/userposts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: user })
        })
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image style={styles.profilePicture} source={{ uri: user.profilePicture }} />
                <Text style={styles.username}>{user.username}</Text>
            </View>
            <ScrollView>
                {posts.map(post => (
                    <View style={styles.postContainer} key={post.id}>
                        <Image style={styles.postImage} source={{ uri: post.imageUrl }} />
                        <View style={styles.postInfo}>
                            <Text style={styles.likes}>{post.likes} Likes</Text>
                            <Text style={styles.comments}>{post.comments} Comments</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default TestPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postContainer: {
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 300,
    },
    postInfo: {
        flexDirection: 'row',
        marginTop: 5,
    },
    likes: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    comments: {
        fontStyle: 'italic',
    },
})



