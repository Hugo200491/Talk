import React, { useState, useEffect, useCallback } from 'react'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import { StyleSheet, ImageBackground, View, LogBox, ActivityIndicator, Dimensions } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { IconButton } from 'react-native-paper';


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


export default function App({route}) {

    const chatsRef = db.collection('chats')

    const {id} = route.params;
    const {item} = route.params;
    const {avatarurl} = route.params;
    console.log(avatarurl)
    console.log(id, item)

    const [user, setUser] = useState({_id: id, name: item, avatar: avatarurl})
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    const [loading, setloading] = useState(true)

    useEffect(() => {
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
            setloading(false)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        setUser(user)
    }
    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    if (loading) {
        return(
         <ActivityIndicator size="large" color="#fff" style={{flex: 1,justifyContent: "center", backgroundColor: "#212c32"}} />
        )
    }


    const renderBubble = (props) => {
        return(
        <Bubble
        {... props}
        wrapperStyle={{
            right: {
                backgroundColor: '#900C3F'
            },
            left: {
                backgroundColor: '#994F6C'
            }
            }} 
            textStyle={{
                left: {
                    color: "#fff"
                }
            }}
        />
        )
    }

   
    const renderSend = (props) => {
        return(
        <Send {... props}>
        <View style={{marginBottom: -13}}>
        <IconButton
        icon="send-circle"
        color={'#900C3F'}
        //style={{}}
        size={40}
         />
   </View>
   </Send>      
           
        )
    }
  
    return (
    <View style={{ flex: 1}}>
        <ImageBackground source={require('../assets/test.jpg')} style={{flex: 0.00001, width: width, height: height, opacity: 0.9}}/>
    <GiftedChat 
    messages={messages} 
    user={user}
    onSend={handleSend} 
    placeholder={"Entrez un message..."}
    renderSend={renderSend}
    renderBubble={renderBubble}
    scrollToBottom
    />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})