import { StyleSheet, Text, View, StatusBar, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { containerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import nopic from '../../../assets/nopic.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Foundation } from '@expo/vector-icons';

const My_UserProfile = ({ navigation }) => {


  const [userdata, setUserdata] = React.useState(null) //hook to store data
  const loaddata = async () => {
    AsyncStorage.getItem('user')
      .then(async (value) => {
        fetch('http://192.168.0.103:3000/userdata', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(value).token
          },
          body: JSON.stringify({ email: JSON.parse(value).user.email })
        })
          .then(res => res.json()).then(data => {
            if (data.message == 'User Found') {
              setUserdata(data.user)
            }
            else {
              alert('Login again')
              navigation.navigate('Login')
            }
          })
          .catch(err => {
            navigation.navigate('Login')
          })
      })

      .catch(err => {
        navigation.navigate('Login')
      })
  }
  useEffect(() => {
    loaddata()
  }, [])

  console.log('userdata', userdata)



  // const data = {
  //   username: 'keshav',
  //   followers: 1100,
  //   following: 1500,
  //   description: 'I am a developer ',
  //   profile_image: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   posts: [
  //     {
  //       id: 1,
  //       post_image: 'https://images.pexels.com/photos/3972136/pexels-photo-3972136.jpeg',
  //     },
  //     {
  //       id: 2,
  //       post_image: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     },
  //     {
  //       id: 3,
  //       post_image: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     },
  //     {
  //       id: 4,
  //       post_image: 'https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     },
  //     {
  //       id: 5,
  //       post_image: 'https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     },
  //     {
  //       id: 6,
  //       post_image: 'https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     },
  //     {
  //       id: 7,
  //       post_image: 'https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     },
  //     {
  //       id: 8,
  //       post_image: 'https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     },
  //   ]
  // }

  return (

    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={"My_UserProfile"} />
      <Bottomnavbar navigation={navigation} page={"My_UserProfile"} />
      <Foundation name="refresh" size={30} color="white" style={styles.refresh}
        onPress={() => loaddata()}

      />
      {
        userdata ?
          <ScrollView>
            <View style={styles.c1}>
              {
                userdata.profilepic.length > 0 ?
                  <Image style={styles.profilepic} source={{ uri: userdata.profilepic }} />
                  :
                  <Image style={styles.profilepic} source={nopic} />
              }
              <Text style={styles.txt}>@{userdata.username}</Text>
              <View style={styles.c11}>
                <View style={styles.c111}>
                  <Text style={styles.txt1}>Followers</Text>
                  <Text style={styles.txt2}>{userdata.followers.length}</Text>
                </View>
                <View style={styles.vr1}></View>
                <View style={styles.c111}>
                  <Text style={styles.txt1}>Following</Text>
                  <Text style={styles.txt2}>{userdata.following.length}</Text>
                </View>
                <View style={styles.vr1}></View>
                <View style={styles.c111}>
                  <Text style={styles.txt1}>Post</Text>
                  <Text style={styles.txt2}>{userdata.posts.length}</Text>
                </View>
              </View>

              {
                userdata.description.length > 0 &&
                <Text style={styles.description}>{userdata.description}</Text>
              }
            </View>
            {
              userdata.posts.length > 0 ?
                <View style={styles.c1}>
                  <Text style={styles.txt}>Your Post</Text>
                  <View style={styles.c13}>
                    {
                      userdata.posts.map(
                        (item) => {
                          return (
                            <TouchableOpacity key={item.post} style={styles.pictoch} onPress={() => navigation.navigate("PostPage", {
                              user: userdata.username,
                              post: item.post
                            })} >
                              <Image key={item.post} style={styles.postpic}
                                source={{ uri: item.post }}
                              />
                            </TouchableOpacity>
                          )
                        }
                      )
                    }
                  </View>
                </View>
                :
                <View style={styles.c2}>
                  <Text style={styles.txt1}>You have not posted anything yet</Text>
                </View>
            }
          </ScrollView>
          :
          <ActivityIndicator size="large" color="white" />
      }
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
  // postpic: {
  //   width: '30%',
  //   height: 120,
  //   margin: 5,
  //   //resizeMode: 'cover',

  // },
  postpic: {
    width: '100%',
    height: 120,
  },
  pictoch: {
    width: '30%',
    height: 120,
    margin: 5
  },
  c13: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center',
  },
  c2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  refresh: {
    position: 'absolute',
    top: 60,
    right: 5,
    zIndex: 1,
    fontSize: 30,

  }
})