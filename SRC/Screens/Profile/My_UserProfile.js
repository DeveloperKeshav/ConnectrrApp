import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'


const My_UserProfile = ({ navigation }) => {
  const data = {
    username: 'keshav',
    followers: 1100,
    following: 1500,
    description: 'I am a developer ',
    profile_image: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    posts: [
      {
        id: 1,
        post_image: 'https://images.pexels.com/photos/3972136/pexels-photo-3972136.jpeg',
      },
      {
        id: 2,
        post_image: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        post_image: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        post_image: 'https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        post_image: 'https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 6,
        post_image: 'https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 7,
        post_image: 'https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 8,
        post_image: 'https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ]
  }

  return (

    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={"My_UserProfile"} />
      <Bottomnavbar navigation={navigation} page={"My_UserProfile"} />
      <ScrollView>
        <View style={styles.c1}>
          <Image style={styles.profilepic} source={{ uri: data.profile_image }} />
          <Text style={styles.txt}>@{data.username}</Text>
          <View style={styles.c11}>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Followers</Text>
              <Text style={styles.txt2}>{data.followers}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Following</Text>
              <Text style={styles.txt2}>{data.following}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Post</Text>
              <Text style={styles.txt2}>{data.posts.length}</Text>
            </View>
          </View>

          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View style={styles.c1}>
          <Text style={styles.txt}>Your Post</Text>
          <View style={styles.c13}>
            {
              data.posts.map(
                (item) => {
                  return (
                    <Image key={item.id} style={styles.postpic}
                      source={{ uri: item.post_image }}
                    />
                  )
                }
              )
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}



export default My_UserProfile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  c1: {
    width: '100%',
    alignItems: 'center',
  },
  profilepic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
  },
  txt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    backgroundColor: '#111111',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  txt1: {
    color: 'white',
    fontSize: 15,
  },
  txt2: {
    color: 'white',
    fontSize: 17,
  },
  c11: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  c111: {
    alignItems: 'center',
  },
  vr1: {
    width: 1,
    height: 50,
    backgroundColor: 'white',
  },
  description: {
    color: 'white',
    fontSize: 13,
    marginVertical: 10,
    backgroundColor: '#111111',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    paddingVertical: 20,
  },
  postpic: {
    width: '30%',
    height: 120,
    margin: 5,
    //resizeMode: 'cover',

  },
  c13: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center',
  }
})