import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import icon from '../../assets/icon.png'
import { icon1, logo2 } from '../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';


const TopNavbar = ({ navigation, page }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={logo2} />
            {
                page === 'MainPage' &&
                <Ionicons name="chatbubbles" size={24} color="black" style={icon1} onPress={
                    () => navigation.navigate('All_chats')
                } />
            }

            {
                page === 'My_UserProfile' &&
                <Ionicons name="settings-sharp" size={24} color="black" style={icon1} onPress={
                    () => navigation.navigate('Settings_1')
                } />
            }
            {/* <Ionicons name="chatbubbles" size={24} color="black" style={icon1} onPress={
                () => navigation.navigate('All_chats')
            } /> */}
        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: '#111111',
    },
})