import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/pagecss';

const Bottomnavbar = ({ navigation, page }) => {
    return (
        <View style={styles.container}>
            {
                page === 'MainPage' ?
                    <MaterialCommunityIcons name="home-variant" size={24} color="black" style={styles.activeicons1} onPress={
                        () => navigation.navigate('MainPage')
                    } />
                    :
                    <MaterialCommunityIcons name="home-variant" size={24} color="black" style={icon1} onPress={
                        () => navigation.navigate('MainPage')
                    } />
            }
            {
                page === 'SearchUserPage' ?
                    <Ionicons name="ios-search" size={24} color="black" style={styles.activeicons1} onPress={
                        () => navigation.navigate('SearchUserPage')
                    } />
                    :
                    <Ionicons name="ios-search" size={24} color="black" style={icon1} onPress={
                        () => navigation.navigate('SearchUserPage')
                    } />
            }
            {
                page === 'DiscoverPage' ?
                    <MaterialIcons name="explore" size={24} color="black" style={styles.activeicons1} onPress={
                        () => navigation.navigate('DiscoverPage')
                    } />
                    :
                    <MaterialIcons name="explore" size={24} color="black" style={icon1} onPress={
                        () => navigation.navigate('DiscoverPage')
                    } />
            }
            {
                page === 'NotificationPage' ?
                    <Ionicons name="ios-heart" size={24} color="black" style={styles.activeicons1} onPress={
                        () => navigation.navigate('NotificationPage')
                    } />
                    :
                    <Ionicons name="ios-heart" size={24} color="black" style={icon1} onPress={
                        () => navigation.navigate('NotificationPage')
                    } />
            }
            {
                page === 'My_UserProfile' ?
                    <FontAwesome name="user-circle" size={24} color="black" style={styles.activeicons1} onPress={
                        () => navigation.navigate('My_UserProfile')
                    } />
                    :
                    <FontAwesome name="user-circle" size={24} color="black" style={icon1} onPress={
                        () => navigation.navigate('My_UserProfile')
                    } />
            }




        </View>
    )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#111111',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        borderTopWidth: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeicons1: {
        backgroundColor: 'white',
        fontSize: 30,
        borderRadius: 50,
        padding: 10,
    }
})