import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { IconButton } from 'react-native-paper';


let width = Dimensions.get('window').width;


function DetailsScreen({route, navigation}) {

    const {item} = route.params;
    const {avatar} = route.params;
    const {id} = route.params;
    const {avatarurl} = route.params;

    console.log(avatarurl)


    return (
      <View style={styles.container}>
      <View style={styles.circle}/>
      <View style={styles.circle2}/>
      <View style={{marginTop: -10}}>
      <IconButton
        icon="card-text"
        color={'#f5f6f7'}
        size={120}
        style={{alignSelf: 'center'}}
      />
<Text style={{fontSize: 25, fontWeight: 'bold', color: '#f5f6f7', alignSelf: 'center', marginTop: -35}}>Bienvenue {item}  !</Text>
<View style={{flexDirection: 'row', justifyContent:'space-between', width: width-30, alignSelf: 'center', marginTop: 20}}>
<TouchableScale activeScale={0.9} tension={50} friction={4} onPress={() => navigation.navigate("Cantine", {item: item, avatar: avatar})}>
<View style={{ backgroundColor: "#36434a", borderRadius: 20, overflow: "hidden", height: 300 }}>
    <View>
      <Image source={require("../assets/cantine.jpg")}
        style={{height: 100,width: 175}} />
        </View>
        <View style={{ padding: 10, width: 175 }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ee9005'}}>Cantine</Text>
        <Text style={{ color: "#DEDEDE", paddingTop: 5, fontSize: 15 }}>Ici, vous pourrez noter la cantine, et donner votre avis !
        En revanche, merci d'être poli et de respecter le personnel de restauration : )</Text>
    </View>
</View>
</TouchableScale>
<TouchableScale activeScale={0.9} tension={50} friction={4} onPress={() => navigation.navigate("Professeurs", {item: item, avatar: avatar})}>
<View style={{ backgroundColor: "#36434a", borderRadius: 20, overflow: "hidden", height: 300 }}>
    <View>
      <Image source={require("../assets/professeur.png")}
        style={{height: 100,width: 175}} />
        </View>
        <View style={{ padding: 10, width: 175 }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ee9005'}}>Professeur</Text>
        <Text style={{ color: "#DEDEDE", paddingTop: 5, fontSize: 15 }}>Ici, vous pourrez noter vos professeurs, et donner votre avis !
        En revanche, merci d'être poli et de les respecter  : )</Text>
    </View>
</View>
</TouchableScale>
</View> 

<TouchableScale activeScale={0.9} tension={50} friction={4} onPress={() => navigation.navigate("ListeChat", {item: item, id: id, avatar: avatar, avatarurl: avatarurl})}>
<View style={{ backgroundColor: "#36434a", borderRadius: 20, overflow: "hidden", alignSelf: 'center', width: width-30, marginTop: 20, height: 220 }}>
    <View>
      <Image source={require("../assets/love2.jpg")}
        style={{height: 100,width: 370}} />
        </View>
        <View style={{ padding: 10, width: 370 }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ee9005'}}>Parler à un personne</Text>
        <Text style={{ color: "#DEDEDE", paddingTop: 5, fontSize: 15 }}>Ici, vous pourrez parler à une ou plusieurs personnes !
        Qui sait, peut-être que vous allez trouver votre âme soeur : ) </Text>
    </View>
</View>
</TouchableScale>

      </View>
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
      top: -150
    },
    circle2: {
      width: 400,
      height: 400,
      borderRadius: 200,
      backgroundColor: "#2b3940",
      position: 'absolute',
      left: 170,
      top: 600
    },
  })

export default DetailsScreen;