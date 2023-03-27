import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Mainpage = ({ navigation }) => {

    AsyncStorage.getItem('user')
        .then(data => {
            console.log('async user data ', data)
        })
        .catch(err => alert(err))
    return (
        <View style={styles.container}>
            <StatusBar />
            <TopNavbar navigation={navigation} page={"MainPage"} />
            <Bottomnavbar navigation={navigation} page={"MainPage"} />
            <FollowersRandomPost />
        </View>
    )
}

export default Mainpage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
    }
})