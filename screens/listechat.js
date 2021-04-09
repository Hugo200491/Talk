import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, LogBox, Dimensions, Image, Alert, ActivityIndicator, ImageBackground} from "react-native";
import TouchableScale from 'react-native-touchable-scale';
import { IconButton, Card, FAB } from 'react-native-paper';
import { format } from 'date-fns'

import * as firebase from 'firebase'
import 'firebase/firestore'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const firebaseConfig = {
    apiKey: "AIzaSyC0tnkFGbu-x-WoLlT4GMOv-jOsfF6lz4E",
    authDomain: "firehugo-cc287.firebaseapp.com",
    projectId: "firehugo-cc287",
    storageBucket: "firehugo-cc287.appspot.com",
    messagingSenderId: "518359093022",
    appId: "1:518359093022:web:82f5c31ae64f92053d830f"
  }
  
  if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
  }
  
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
  
  const db = firebase.firestore()

function ListeChat({route, navigation}) {

    const [users, setUsers] = useState([]); 
    const [privatechat, setprivatechat] = useState([]); 

    const [loading, setLoading] = useState(true); 
    const [loading2, setLoading2] = useState(true); 
    const [loading3, setLoading3] = useState(true)

    const {item} = route.params;
    const {avatar} = route.params;
    const {id} = route.params;
    const {avatarurl} = route.params;

    useEffect(() => {
        const subscriber = db
          .collection('users')
          .onSnapshot(querySnapshot => {
            const users = [];
            querySnapshot.forEach(documentSnapshot => {
              users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            var filtered = users.filter(function(el) { return el.name != item });
            //console.log(filtered)
            setUsers(filtered);
            setLoading(false)
          });

          const privateduo = db
          .collection('privatechat')
          .onSnapshot(querySnapshot => {
            const privatechat = [];
            querySnapshot.forEach(documentSnapshot => {
              privatechat.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
           // console.log(privatechat)
            var filtered = privatechat.filter(function(el) { return el.name == item || el.namesecond == item });
            
           for (const element of filtered) {

            if (element["namesecond"] == item) {
              console.log("modify")
              //console.log(element)
              let a = element["name"]
              let b = element["namesecond"]
              let c = element["avatar"]
              let d = element["avatarfirst"]
              element["name"] = b
              element["namesecond"] = a
              element["avatar"] = d
              element["avatarfirst"] = c
            
            } else {
              //console.log("do nothing")
            }
          }
          //console.log(filtered)            
          setprivatechat(filtered);
          setLoading2(false)
          });

      }, []);


      function avatarcomment(item){
        //console.log(item)
        if (item["avatar"] == 1) {
          return(require('../assets/heros/1.png'))
        }
        if (item["avatar"] == 2) {
          return(require('../assets/heros/2.png'))
        }
        if (item["avatar"] == 3) {
          return(require('../assets/heros/3.png'))
        }
        if (item["avatar"] == 4) {
          return(require('../assets/heros/4.png'))
        }
        if (item["avatar"] == 5) {
          return(require('../assets/heros/5.png'))
        }
        if (item["avatar"] == 6) {
          return(require('../assets/heros/6.png'))
        }
        if (item["avatar"] == 7) {
          return(require('../assets/heros/7.png'))
        }
        if (item["avatar"] == 8) {
          return(require('../assets/heros/8.png'))
        }
        if (item["avatar"] == 9) {
          return(require('../assets/heros/9.png'))
        }
        if (item["avatar"] == 10) {
          return(require('../assets/heros/10.png'))
        }
        if (item["avatar"] == 11) {
          return(require('../assets/heros/11.png'))
        }
        if (item["avatar"] == 12) {
          return(require('../assets/heros/12.png'))
        }
        if (item["avatar"] == 13) {
          return(require('../assets/heros/13.png'))
        }
        if (item["avatar"] == 14) {
          return(require('../assets/heros/14.png'))
        }
        if (item["avatar"] == 15) {
          return(require('../assets/heros/15.png'))
        }
        if (item["avatar"] == 16) {
          return(require('../assets/heros/16.png'))
        }
        if (item["avatar"] == 17) {
          return(require('../assets/heros/17.png'))
        }
        if (item["avatar"] == 18) {
          return(require('../assets/heros/18.png'))
        }
        if (item["avatar"] == 19) {
          return(require('../assets/heros/19.png'))
        }
        if (item["avatar"] == 20) {
          return(require('../assets/heros/20.png'))
        }
        if (item["avatar"] == 21) {
          return(require('../assets/heros/21.png'))
        }
        if (item["avatar"] == 22) {
          return(require('../assets/heros/22.png'))
        }
        if (item["avatar"] == 23) {
          return(require('../assets/heros/23.png'))
        }
        if (item["avatar"] == 24) {
          return(require('../assets/heros/24.png'))
        }
        if (item["avatar"] == 25) {
          return(require('../assets/heros/25.png'))
        }
        if (item["avatar"] == 26) {
          return(require('../assets/heros/26.png'))
        }
        if (item["avatar"] == 27) {
          return(require('../assets/heros/27.png'))
        }
        if (item["avatar"] == 28) {
          return(require('../assets/heros/28.png'))
        }
        if (item["avatar"] == 29) {
          return(require('../assets/heros/29.png'))
        }
        if (item["avatar"] == 30) {
          return(require('../assets/heros/30.png'))
        }
        if (item["avatar"] == 31) {
          return(require('../assets/heros/31.png'))
        }
        if (item["avatar"] == 32) {
          return(require('../assets/heros/32.png'))
        }
        if (item["avatar"] == 33) {
          return(require('../assets/heros/33.png'))
        }
        if (item["avatar"] == 34) {
          return(require('../assets/heros/34.png'))
        }
        if (item["avatar"] == 35) {
          return(require('../assets/heros/35.png'))
        }
        if (item["avatar"] == 36) {
          return(require('../assets/heros/36.png'))
        }
        if (item["avatar"] == 37) {
          return(require('../assets/heros/37.png'))
        }
        if (item["avatar"] == 38) {
          return(require('../assets/heros/38.png'))
        }
        if (item["avatar"] == 39) {
          return(require('../assets/heros/39.png'))
        }
        if (item["avatar"] == 40) {
          return(require('../assets/heros/40.png'))
        }
        if (item["avatar"] == 41) {
          return(require('../assets/heros/41.png'))
        }
        if (item["avatar"] == 42) {
          return(require('../assets/heros/42.png'))
        }
        if (item["avatar"] == 43) {
          return(require('../assets/heros/43.png'))
        }
        if (item["avatar"] == 44) {
          return(require('../assets/heros/44.png'))
        }
        if (item["avatar"] == 45) {
          return(require('../assets/heros/45.png'))
        }
        if (item["avatar"] == 46) {
          return(require('../assets/heros/46.png'))
        }
        if (item["avatar"] == 47) {
          return(require('../assets/heros/47.png'))
        }
        if (item["avatar"] == 48) {
          return(require('../assets/heros/48.png'))
        }
      }

      async function addconv(ITEM) {
        
        let date = new Date();
        let formattedDate = format(date, "yyyy-MM-dd"); 
    
        let hour = date.getHours()
        let minutes = date.getMinutes()
        function min(){
          if(minutes < 10) {
            return("0"+minutes)
          } else {
            return(minutes)
          }
        }
    
        const addcomment = db.collection("privatechat");
      
        await addcomment.doc(item+"_with_"+ITEM.name).set({
          name: item, namesecond: ITEM.name,
          date: formattedDate, hour: hour+" : "+min(),
          avatar: ITEM.avatar,
          avatarfirst: avatar,
          id: Math.random().toString(36).substring(7),
          nameofconv: item+"_with_"+ITEM.name
        });
      }

      function startchat(ITEM) {
        console.log("#####")
        console.log(ITEM.name)
        console.log(ITEM.namesecond)
        console.log(item)
        console.log("#####")
        navigation.navigate("PrivateChat", {nameid: ITEM.name,namesecond: ITEM.namesecond, 
          avatar: ITEM.avatar, id: id, nameofconv: ITEM.nameofconv, realname: item,
          avatarurl: avatarurl})
      }

      const AlertPopUp = (item) =>
      Alert.alert(
        "Nouvelle discussion ?",
        "Voulez vous créer une discussion avec "+item.name+" 😏  ?",
        [
            {
                text: "Annuler",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
           
              { text: "Démarer la discussion", onPress: () => addconv(item) },
         
        ]
      );

      for (const element of users) {
         for (const element2 of privatechat) {
          if (element2["namesecond"] == element["name"]) {
            var index = users.indexOf(element)
            users.splice(index, 1)
            setLoading3(false)
          }
        }
      }
   

      
  if (loading && loading2 && loading3) {
    return <ActivityIndicator size="large" color="#fff" style={{flex: 1,justifyContent: "center", backgroundColor: "#212c32"}} />;
  }

  function vu() {
    if (privatechat.length == 0) {
      return("flex")
    } else {
      return("none")
    }
  }



  const sortedActivities = privatechat.slice().sort((a, b) => new Date(b.date) - new Date(a.date))

  console.log(sortedActivities)
  

  
    

  return (

    <View style={{backgroundColor: "#212c32", flex: 1}}>

<View style={{marginBottom: 0}}>
      <FlatList
          data={users}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item, index }) => (

        <View>           
        <TouchableScale activeScale={0.95} tension={50} friction={4} onPress={() => AlertPopUp(item)}>
          <View> 
          <View style={{padding: 20}}>
          <Image source={avatarcomment(item)} style={{height: 80, width: 80, borderRadius: 40, alignSelf: 'center'}}/>
          <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 20, alignSelf: 'center'}}>{item.name}</Text>
          </View> 
          </View>
        </TouchableScale>
        </View>
          )}
        />
</View>


    <Card style={{width: width, alignSelf: 'center', borderRadius: 50, backgroundColor: '#36434a', height: height,
  flex: 1, position: 'absolute', top: 140 }}>
    <Card.Content>
    <View>

<TouchableScale activeScale={0.9} tension={50} friction={4} onPress={() => navigation.navigate("ChatRoom", {item: item, id: id, avatar: avatar, avatarurl: avatarurl})}>  
   <ImageBackground source={require("../assets/test.jpg")} style={{borderRadius: 20, overflow: "hidden", alignSelf: 'center', width: width-40, marginTop: 20, height: 95, opacity: 0.9 }}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Discussion Générale</Text>
   </View>
   </ImageBackground>
</TouchableScale>



    <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 20, marginLeft: 20, marginTop: 20}}>Vos discussions personnelles:</Text>
    <View style={{display: vu()}}>
    <Image source={require('../assets/none.png')} style={{alignSelf: 'center', marginTop: 40}}/> 
    <Text style={{color: "#434243",fontWeight: "bold", fontSize: 20, alignSelf: 'center'}}>Vous n'avez aucune discussion... </Text>
    <Text style={{color: "#434243",fontWeight: "bold", fontSize: 20, alignSelf: 'center'}}>Créez en maintenant !</Text>
    </View>
    <FlatList
          contentContainerStyle={{ paddingBottom: 60, paddingTop: 10 }}
          data={sortedActivities}
          style={{alignSelf: 'center', height: 450, marginTop: 10}}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item, index }) => (
           
            <TouchableScale activeScale={0.95} tension={50} friction={4} onPress={() => startchat(item)} >
          <View style={styles.item}> 
          <View style={{flexDirection:'row', marginRight: 5, padding: 5}}>
            <Image source={avatarcomment(item)} style={{height: 70, width: 70, borderRadius: 35, alignSelf: 'center', marginLeft: 5}}/>
          <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 20, alignSelf: 'center', marginLeft: 20}}>{item.namesecond}</Text>
          <Text style={{color: "#ee9005", fontSize: 16, alignSelf: 'center', marginLeft: 20}}>{item.date}</Text>
          <IconButton icon={"chevron-right"} color={"#900C3F"} size={35} 
            style={{position: 'absolute', left: 275 ,alignSelf: 'center'}}
           /> 
          </View>
          </View> 
          </TouchableScale>
        
          )}
        />
    </View>
    </Card.Content>
    </Card>


    </View>
  )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: 300,
        height: 430,
        backgroundColor: "#FFA499",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15
      },
      modalText: {
        marginTop: -10,
        marginBottom: 10,
        textAlign: "center",
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#3F3E40'
      },
      item: {
        backgroundColor: '#212c32',
        padding: 5,
        marginVertical: 3,
        borderRadius: 20,
        width: width-40,
        alignSelf: 'center'
      },
  });
  

export default ListeChat;