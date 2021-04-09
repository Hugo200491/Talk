import * as React from 'react';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Connexion from './screens/connexion'
import Inscription from './screens/inscription'
import Home from './screens/home'
import Cantine from './screens/cantine'
import Professeur from './screens/professeurs'
import ListeChat from './screens/listechat'
import ChatRoom from './screens/chatroom'
import PrivateChat from './screens/privatechat'
import Infos from './screens/infos'

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#212c32' }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Connexion" component={Connexion} options={{headerShown: false}}/>
        <Stack.Screen name="Inscription" component={Inscription} options={{headerShown: false}}/>
        <Stack.Screen name="Accueil" component={Home} options={{headerLeft: null,headerStyle: {backgroundColor: '#2b3940'},headerTintColor: '#f5f6f7'}} />
        <Stack.Screen name="Cantine" component={Cantine} options={{headerStyle: {backgroundColor: '#2b3940'},headerTintColor: '#f5f6f7'}} />
        <Stack.Screen name="Professeurs" component={Professeur} options={{headerStyle: {backgroundColor: '#2b3940'},headerTintColor: '#f5f6f7'}} />
        <Stack.Screen name="ListeChat" component={ListeChat} options={{title: "Discussions", headerStyle: {backgroundColor: '#2b3940'},headerTintColor: '#f5f6f7'}} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} options={{title: "Discussion Générale", headerStyle: {backgroundColor: '#2b3940'},headerTintColor: '#f5f6f7'}} />
        <Stack.Screen name="PrivateChat" component={PrivateChat}
          options={({route}) => ({
          title: route.params.namesecond,
          headerStyle: {backgroundColor: '#2b3940'},
          headerTintColor: '#f5f6f7'
        })} />
        <Stack.Screen name="Informations" component={Infos} 
        options={({route}) => ({
          title: "Commentaire de " + route.params.item["name"],
          headerStyle: {backgroundColor: '#2b3940'},
          headerTintColor: '#f5f6f7'
        })} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default App;
