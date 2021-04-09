import React from 'react'
import { StyleSheet, Text, View, LogBox } from 'react-native'
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

async function exampleDataTwo() {

  const citiesRef = db.collection('utilisateurs');

  await citiesRef.doc('SF').set({
    name: 'San Francisco', state: 'CA', country: 'USA',
    capital: false, population: 860000
  });
  await citiesRef.doc('LA').set({
    name: 'Los Angeles', state: 'CA', country: 'USA',
    capital: false, population: 3900000
  });
}


async function getDocument() {

  const cityRef = db.collection('cities').doc('SF');
  const doc = await cityRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
}
async function GetUser() {

  const citiesRef = db.collection('cities');
  const snapshot = await citiesRef.get();
  snapshot.forEach(doc => {
    console.log(doc.id);
  });
}


async function updateDocument() {

  const cityRef = db.collection('cities').doc('LA');
  const res = await cityRef.update({capital: false});

  console.log('Update: ', res);
}

async function getAll() {

  let L = []
  let P = []
 
  const citiesRef = db.collection('cities');
  const snapshot = await citiesRef.get();
  snapshot.forEach(doc => {
    //console.log(doc.id, '=>', doc.data());
    L.push(doc.id)
    P.push(doc.data())
  });

  var result = {};
  L.forEach((liste, liste2) => result[liste] = P[liste2]);
  //console.log(result);

  //console.log(Object.keys(result).map(key => {return result[key]}));
 
}


export default function App() {

//exampleDataTwo()
//getDocument()
//GetUser()
//updateDocument()
getAll()

return(
    <View style={styles.container}>
        <Text>hello</Text>
    </View>
  )
}

console.log("hello")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
})