import React, { useState, useEffect } from "react";
import { Text, View, Image, Dimensions, ActivityIndicator, LogBox } from 'react-native';
import Star from 'react-native-star-view';
import { Card, IconButton } from 'react-native-paper';
import * as firebase from 'firebase'
import 'firebase/firestore'

let width = Dimensions.get('window').width;

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

function Info({route}) {

    const {item} = route.params;

    console.log(item["name_id"])

    console.log(route.params.item["name"])

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
        getDocument()
    }, []);

    async function getDocument() {

        const cityRef = db.collection('users').doc(item["name"]);
        const doc = await cityRef.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          setData(doc.data())
          setLoading(false)
        }
      }

    console.log(item)

    function avatar(){
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

      if (loading) {
        return <ActivityIndicator size="large" color="#fff" style={{flex: 1,justifyContent: "center", backgroundColor: "#212c32"}} />;
      }


  return (
    <View style={{ flex: 1,alignItems: "center", backgroundColor: '#212c32'}}>
    <Card style={{width: width-20, alignSelf: 'center',  borderRadius: 20, backgroundColor: '#36434a', marginTop: 40}}>
    <Card.Content>
    <View>
      <Text style={{color: "#ee9005",fontWeight: "bold", fontSize: 20}}>Informations Utilisateur :</Text> 
      <View style={{flexDirection: 'row'}}>
      <Image source={avatar()} style={{width: 100, height: 100, borderRadius: 50, marginTop: 25}}/>
      <View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 20}}>Nom :</Text> 
      <Text style={{ color: "#DEDEDE", marginLeft: 10, fontSize: 20,marginTop: 17.5 }}>{data["name"]}</Text>
      </View>  
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 20}}>Appareil :</Text> 
      <Text style={{ color: "#DEDEDE", marginLeft: 10, fontSize: 20,marginTop: 17.5 }}>{data["platform"]}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 20}}>Ici depuis :</Text> 
      <Text style={{ color: "#DEDEDE", marginLeft: 10, fontSize: 20,marginTop: 17.5 }}>{data["date"]}</Text>
      </View>
      </View>
      </View>
      </View>
    </Card.Content>
  </Card>

  <Card style={{width: width-20, alignSelf: 'center',  borderRadius: 20, backgroundColor: '#36434a', marginTop: 40}}>
    <Card.Content>
    <View>
      <Text style={{color: "#ee9005",fontWeight: "bold", fontSize: 20}}>Informations Commentaire :</Text> 
  
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10}}>Commentaire :</Text> 
      <Text style={{ color: "#DEDEDE", marginLeft: 10, fontSize: 20 }}>{item["comment"]}</Text>

      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10}}>Like :     </Text> 
      <Text style={{color: "#900C3F",fontWeight: "bold", fontSize: 20, marginTop: 18}}>{item["like"]}</Text>
      <IconButton icon={"heart"} color={"#900C3F"} size={35} />
      </View>
      
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 10, marginLeft: 10}}>Note :</Text> 
      <Star score={parseFloat(item["note"])} style={{width: 200,height: 40, marginTop:0, marginLeft: 20}} />
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10}}>Date :</Text> 
      <Text style={{ color: "#DEDEDE", marginLeft: 10, fontSize: 20,marginTop: 17.5 }}>{item["date"]}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10}}>Heure :</Text> 
      <Text style={{ color: "#DEDEDE", marginLeft: 10, fontSize: 20,marginTop: 17.5 }}>{item["hour"]}</Text>
      </View>
    
      </View>
    </Card.Content>
  </Card>

    </View>
  )
}
export default Info;