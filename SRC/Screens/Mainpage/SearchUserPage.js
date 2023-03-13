import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { containerFull, searchbar } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import UserCard from '../../Cards/UserCard'


const SearchUserPage = ({ navigation }) => {

  let data = [
    {
      username: "Keshav",
      profile_image: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Adesh",
      profile_image: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Bhushan",
      profile_image: "https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Khandare",
      profile_image: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Shelke",
      profile_image: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Wakhare",
      profile_image: "https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  const [keyword, setKeyword] = useState('')
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} />
      <Bottomnavbar navigation={navigation} page={"SearchUserPage"} />

      <View style={styles.searchview}>
        <TextInput placeholder="Search.." style={searchbar}
          onChangeText={(text) => {
            setKeyword(text)
          }}
        />
      </View>
      <ScrollView style={styles.userlist}>
        {
          data.filter(
            (user) => {
              if (keyword == '') {
                return null
              }
              else if (
                user.username.toLowerCase().includes(keyword.toLowerCase())
              ) {
                return user
              }
            }
          ).map((item, index) => {
            return <UserCard key={item.username} user={item} />
          })
        }
      </ScrollView>


    </View>
  )
}

export default SearchUserPage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  searchview: {
    marginTop: 5,
  },
  userlist: {
    width: '100%',
    marginTop: 20,
  },
})