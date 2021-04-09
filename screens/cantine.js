import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, View, FlatList, Dimensions, Image, LogBox, ActivityIndicator } from "react-native";
import StarRating from 'react-native-star-rating-widget';
import Textarea from 'react-native-textarea';
import { FAB, IconButton, Card } from 'react-native-paper';
import Star from 'react-native-star-view';
import TouchableScale from 'react-native-touchable-scale';
import { format } from 'date-fns'
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

const App = ({route, navigation}) => {


  const {item} = route.params;
  const {avatar} = route.params;
  const [text, onChangeText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(3);

  const [loading, setLoading] = useState(true); 
  const [loading2, setLoading2] = useState(true); 
  const [users, setUsers] = useState([]); 
  const [cantinelike, setcantinelike] = useState([]); 
 

  useEffect(() => {
    const subscriber = db
      .collection('cantine_comments')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUsers(users);
        setLoading(false);
      });

      const subscriber2 = db
      .collection(item+"_likecantine")
      .onSnapshot(querySnapshot => {
        const cantinelike = [];
        querySnapshot.forEach(documentSnapshot => {
          cantinelike.push(
             documentSnapshot.id,
          );
        });
        setcantinelike(cantinelike);
        setLoading2(false)
      });
  
  
    return () => subscriber();
  }, []);


  var note = [];
      var len = users.length;
      for (var i = 0; i < len; i++) {
          note.push(
              users[i]["note"]
          );
      }
        var b = note.length,
            c = 0, i;
        for (i = 0; i < b; i++){
          c += Number(note[i]);
        }
        let moyenne = c/b;
      

  async function AddCommentCantine() {

    function number(){
        if (rating > 5) {
          return("5")
        } else {
          return(JSON.stringify(rating))
        }
      }
    

    let a = Math.random().toString(36).substring(7)
    let date = new Date();
    let formattedDate = format(date, "dd/MM/yyyy"); 

    let hour = date.getHours()
    let minutes = date.getMinutes()
    function min(){
      if(minutes < 10) {
        return("0"+minutes)
      } else {
        return(minutes)
      }
    }

    const addcomment = db.collection('cantine_comments');
  
    await addcomment.doc(item+"_"+a).set({
      name: item, comment: text, note: number(),
      like: 0, date: formattedDate, hour: hour + " : " + min(),
      id: a, name_id:  item+"_"+a, avatar: avatar
    });
  }

  async function AddLike(itemmm) {
 
    let liste = []
   
    const cherche = db.collection(item+"_likecantine");
    const snapshot = await cherche.get();
    snapshot.forEach(doc => {
      liste.push(doc.id)
    });


    if (liste.find(element => element == itemmm["id"])) {
        console.log('a déjà été liké')
    } else {

    let date = new Date();
    let formattedDate = format(date, "dd/MM/yyyy"); 

    let hour = date.getHours()
    let minutes = date.getMinutes()
    function min(){
      if(minutes < 10) {
        return("0"+minutes)
      } else {
        return(minutes)
      }
    }

    const like = db.collection("cantine_comments").doc(itemmm["name_id"]);
    await like.update({like: itemmm["like"]+1});

    const newlike = db.collection(item+"_likecantine");
    await newlike.doc(itemmm["id"]).set({
    comment: itemmm["comment"], date: formattedDate,
    hour:  hour + " : " + min()
  });
   }

}

function test(item){

  if (cantinelike.find(element => element == item["id"])) {
    return("heart")
  } else {
    return("heart-outline")
  }
}


  function star(item){
    if (item.note == 0.5) {
      return(0.5)
    }
    if (item.note == 1) {
      return(1)
    }
    if (item.note == 1.5) {
      return(1.5)
    }
    if (item.note == 2) {
      return(2)
    }
    if (item.note == 2.5) {
      return(2.5)
    }
    if (item.note == 3) {
      return(3)
    }
    if (item.note == 3.5) {
      return(3.5)
    }
    if (item.note == 4) {
      return(4)
    }
    if (item.note == 4.5) {
      return(4.5)
    } else {
      return(5)
    }
  }


  function Add(){
    AddCommentCantine()
    setModalVisible(!modalVisible)
    onChangeText("")
    setRating(3)
  }
  function Close(){
    setModalVisible(!modalVisible)
    onChangeText("")
    setRating(3)
  }
  function verif(){
    if (text == "") {
      return("none")
    } else {
      return("flex")
    }
  }

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



  if (loading && loading2) {
    return <ActivityIndicator size="large" color="#fff" style={{flex: 1,justifyContent: "center", backgroundColor: "#212c32"}} />;
  }



  return (
    <View style={{backgroundColor: "#212c32"}}>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Ajouter un avis</Text>
            <View style={{marginTop: 10}}>
            <StarRating
              rating={rating}
              onChange={setRating}
              starSize={40}
              color={"#900C3F"}
                />
              </View>
      
      <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={text => onChangeText(text)}
    defaultValue={text}
    maxLength={200}
    placeholder={'Ajouter un commentaire...'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
            <View style={{marginTop: 30, flexDirection: 'row'}}>
            <FAB
    style={{backgroundColor: '#E8E8E8', height: 50, justifyContent: 'center', width: 50, alignItems: 'center', marginLeft: 2}}
    color="gray"
    small
    icon="close"
    onPress={() => Close()}
  />
            <FAB
    style={{backgroundColor: '#900C3F', marginLeft: 70, display: verif()}}
    small
    icon="check"
    label="Ajouter"
    onPress={() => Add()}
  />
            </View>
          </View>
        </View>
      </Modal>
      </View>

  <Card style={{width: width-20, alignSelf: 'center',  borderRadius: 20, backgroundColor: '#36434a'}}>
    <Card.Content>
    <View style={{flexDirection: "row"}}>
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 20}}>Moyenne :  </Text> 
      <Star score={parseFloat(moyenne.toFixed(2))} style={{width: 200,height: 40, marginTop:-7}} />
      <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 12, marginLeft: 5, marginTop: 8}}>{note.length}</Text> 
      </View>
      <FAB
    style={{backgroundColor: '#900C3F', alignSelf: 'center', width: width-50, marginTop: 20}}
    small
    label="Ajouter un avis"
    icon="plus"
    onPress={() => setModalVisible(true)}
  />
    </Card.Content>
  </Card>

  <FlatList
          contentContainerStyle={{ paddingBottom: 60, paddingTop: 10 }}
          data={users}
          style={{alignSelf: 'center', height: 640, marginTop: 10}}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item, index }) => (
           
            <TouchableScale activeScale={0.95} tension={50} friction={4} onLongPress={() => navigation.navigate("Informations", {item: item}) }>
          <View style={styles.item}> 
          <View style={{flexDirection:'row', marginRight: 5, padding: 5}}>
            <Image source={avatarcomment(item)} style={{height: 60, width: 60, borderRadius: 30, alignSelf: 'center', marginLeft: 5}}/>
          <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 20, position: "absolute", marginLeft: 81}}>{item.name}</Text>
          <Star score={star(item)} style={{width: 80,height: 16,position: 'absolute', marginLeft: 265, marginTop: 0}} />
            <Text style={{alignSelf: 'center', flexShrink: 1, width: width-200, marginLeft: 12, marginTop: 20, color: '#DEDEDE'}}>{item.comment}</Text>

            <IconButton icon={test(item)} color={"#900C3F"} size={35} 
            style={{position: 'absolute', left: 275 ,alignSelf: 'center'}}
            onPress={() => AddLike(item)}
           /> 
            <Text style={{color: "#900C3F",fontWeight: "bold", fontSize: 15,position: 'absolute', left: 330,alignSelf: 'center'}}>{item.like}</Text>
            </View>
          </View> 
          </TouchableScale>
        
          )}
        />
      
    </View>
  );
};

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
    backgroundColor: "#36434a",
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
  input: {
    marginTop: 20,
    height: 50,
    borderWidth: 1,
    width: 300,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "gray",
    fontWeight: 'bold',

  },
  modalText: {
    marginTop: -10,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 25, 
    fontWeight: 'bold', 
    color: '#f5f6f7'
  },
  textareaContainer: {
    marginTop: 30,
    height: 180,
    width: 250,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#FFF4F2',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 17,
    color: '#333',
  },
  item: {
    backgroundColor: '#36434a',
    padding: 5,
    marginVertical: 3,
    borderRadius: 20,
    width: width-20,
    alignSelf: 'center',
  },
});

export default App;