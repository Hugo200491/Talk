import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert, LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import * as firebase from 'firebase'
import 'firebase/firestore'

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

function Connexion({navigation}) {


    const AlertPopUp = () =>
    Alert.alert(
      "Un problème est survenu...",
      "Votre votre nom d'utilisateur ou votre mot de passe est incorecte 😕",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );


    const getData = async () => {
      try {
        const oui = await AsyncStorage.getItem('@storage_User')
        const non = await AsyncStorage.getItem('@storage_Pass')
        if(oui !== null || non !== null) {
          onChangeText(oui)
          onChangeText2(non)
        }
      } catch(e) {
     }
    }

    getData()

    const [text, onChangeText] = useState("");
    const [text2, onChangeText2] = useState("");
   
    const [visible, setvisible] = useState(true)

    function password(){
      if (visible == true) {
        setvisible(false)
      } if (visible == false) {
        setvisible(true)
      }
    }

    function eyes(){
      if (visible == true) {
        return("eye-settings")
      } if (visible == false) {
        return("eye-settings-outline")
      }
    }

async function Connexion() {
      
    const verif = db.collection('users').doc(text);
    const doc = await verif.get();
    if (!doc.exists) {
        AlertPopUp()
    } else {
        console.log(doc.data()["password"])
        if (doc.data()["password"] == text2) {
            navigation.navigate("Accueil", {item: text, avatar: doc.data()["avatar"], avatarurl: doc.data()["avatarurl"], id: doc.data()["id"] })
          } else {
            AlertPopUp()
          }
      
    }
}
    

  return (
    <View style={styles.container}>
    <View style={styles.circle}/>
    <View style={{marginTop: 70}}>
    <IconButton
        icon="card-text"
        color={'#f5f6f7'}
        size={120}
        style={{alignSelf: 'center'}}
      />
      <View style={{marginHorizontal: 32, marginTop: -40}}>
      <Text style={styles.header}>Connexion</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        maxLength={12}
        placeholder={"utilisateur"}
        placeholderTextColor={"gray"}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        secureTextEntry={visible}
        value={text2}
        placeholder={"mot de passe"}
        placeholderTextColor={"gray"}
        maxLength={20}
      />
      <IconButton
        icon={eyes()}
        color={'#f5f6f7'}
        size={30}
        style={{position: "absolute", top: 166, left: 240}}
        onPress={() => password()}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
      <Text style={{color: '#f5f6f7', marginTop: 30, alignSelf: 'center', marginLeft: -40}}>Nouveau ? Créer un compte !</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'flex-end', marginTop: 100}}>
      <IconButton
        icon="arrow-right"
        color={'#f5f6f7'}
        size={60}
        style={{ backgroundColor: '#ee9005'}}
        onPress={() => Connexion()}
      />
    </View>
    </View>
    </View>
    <View style={styles.circle2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212c32"
  },
  circle: {
    width: 700,
    height: 700,
    borderRadius: 350,
    backgroundColor: "#2b3940",
    position: 'absolute',
    left: -280,
    top: -50
  },
  circle2: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#2b3940",
    position: 'absolute',
    left: 170,
    top: 700
  },
  header: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#f5f6f7",
    marginTop: 32
  },
  input: {
    marginTop: 20,
    height: 50,
    borderWidth: 1,
    width: 300,
    borderColor: "#f5f6f7",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#f5f6f7",
    fontWeight: 'bold',
    fontSize: 20
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FF0000",
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Connexion;