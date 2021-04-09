import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert, Platform, LogBox, Modal, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import { format } from 'date-fns'
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

function Inscription({navigation}) {


    const AlertPopUp = () =>
    Alert.alert(
      "Un problème est survenu...",
      "Cet utilisateur existe déjà, veuillez en choisir un autre 😕",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const [text, onChangeText] = useState("");
    const [text2, onChangeText2] = useState("");

    const [opacity1, change1] = useState(1)
    const [opacity2, change2] = useState(1)
    const [opacity3, change3] = useState(1)
    const [opacity4, change4] = useState(1)
    const [opacity5, change5] = useState(0.5)
    const [opacity6, change6] = useState(1)
    const [opacity7, change7] = useState(1)
    const [opacity8, change8] = useState(1)
    const [opacity9, change9] = useState(1)
    const [opacity10, change10] = useState(1)
    const [opacity11, change11] = useState(1)
    const [opacity12, change12] = useState(1)
    const [opacity13, change13] = useState(1)
    const [opacity14, change14] = useState(1)
    const [opacity15, change15] = useState(1)
    const [opacity16, change16] = useState(1)
    const [opacity17, change17] = useState(1)
    const [opacity18, change18] = useState(1)
    const [opacity19, change19] = useState(1)
    const [opacity20, change20] = useState(1)
    const [opacity21, change21] = useState(1)
    const [opacity22, change22] = useState(1)
    const [opacity23, change23] = useState(1)
    const [opacity24, change24] = useState(1)
    const [opacity25, change25] = useState(1)
    const [opacity26, change26] = useState(1)
    const [opacity27, change27] = useState(1)
    const [opacity28, change28] = useState(1)
    const [opacity29, change29] = useState(1)
    const [opacity30, change30] = useState(1)
    const [opacity31, change31] = useState(1)
    const [opacity32, change32] = useState(1)
    const [opacity33, change33] = useState(1)
    const [opacity34, change34] = useState(1)
    const [opacity35, change35] = useState(1)
    const [opacity36, change36] = useState(1)
    const [opacity37, change37] = useState(1)
    const [opacity38, change38] = useState(1)
    const [opacity39, change39] = useState(1)
    const [opacity40, change40] = useState(1)
    const [opacity41, change41] = useState(1)
    const [opacity42, change42] = useState(1)
    const [opacity43, change43] = useState(1)
    const [opacity44, change44] = useState(1)
    const [opacity45, change45] = useState(1)
    const [opacity46, change46] = useState(1)
    const [opacity47, change47] = useState(1)
    const [opacity48, change48] = useState(1)

    
    function avatar1() {
      change1(0.5)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar2() {
      change1(1)
      change2(0.5)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar3() {
      change1(1)
      change2(1)
      change3(0.5)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar4() {
      change1(1)
      change2(1)
      change3(1)
      change4(0.5)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar5() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(0.5)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar6() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(0.5)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar7() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(0.5)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar8() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(0.5)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar9() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(0.5)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar10() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(0.5)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar11() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(0.5)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar12() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(0.5)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar13() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(0.5)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar14() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(0.5)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar15() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(0.5)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar16() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(0.5)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar17() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(0.5)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar18() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(0.5)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar19() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(0.5)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar20() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(0.5)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar21() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(0.5)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar22() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(0.5)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar23() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(0.5)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar24() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(0.5)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar25() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(0.5)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar26() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(0.5)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar27() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(0.5)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar28() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(0.5)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar29() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(0.5)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar30() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(0.5)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar31() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(0.5)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar32() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(0.5)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar33() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(0.5)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar34() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(0.5)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar35() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(0.5)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar36() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(0.5)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar37() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(0.5)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar38() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(0.5)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar39() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(0.5)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar40() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(0.5)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar41() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(0.5)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar42() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(0.5)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar43() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(0.5)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar44() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(0.5)
      change45(1)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar45() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(0.5)
      change46(1)
      change47(1)
      change48(1)
    }
    function avatar46() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(0.5)
      change47(1)
      change48(1)
    }
    function avatar47() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(0.5)
      change48(1)
    }
    function avatar48() {
      change1(1)
      change2(1)
      change3(1)
      change4(1)
      change5(1)
      change6(1)
      change7(1)
      change8(1)
      change9(1)
      change10(1)
      change11(1)
      change12(1)
      change13(1)
      change14(1)
      change15(1)
      change16(1)
      change17(1)
      change18(1)
      change19(1)
      change20(1)
      change21(1)
      change22(1)
      change23(1)
      change24(1)
      change25(1)
      change26(1)
      change27(1)
      change28(1)
      change29(1)
      change30(1)
      change31(1)
      change32(1)
      change33(1)
      change34(1)
      change35(1)
      change36(1)
      change37(1)
      change38(1)
      change39(1)
      change40(1)
      change41(1)
      change42(1)
      change43(1)
      change44(1)
      change45(1)
      change46(1)
      change47(1)
      change48(0.5)
    }
   
    function choisiravatar(){
      if(opacity1 == 0.5) {
        return(1)
      }
      if(opacity2 == 0.5) {
        return(2)
      }
      if(opacity3 == 0.5) {
        return(3)
      }
      if(opacity4 == 0.5) {
        return(4)
      }
      if(opacity5 == 0.5) {
        return(5)
      }
      if(opacity6 == 0.5) {
        return(6)
      }
      if(opacity7 == 0.5) {
        return(7)
      }
      if(opacity8 == 0.5) {
        return(8)
      }
      if(opacity9 == 0.5) {
        return(9)
      }
      if(opacity10 == 0.5) {
        return(10)
      }
      if(opacity11 == 0.5) {
        return(11)
      }
      if(opacity12 == 0.5) {
        return(12)
      }
      if(opacity13 == 0.5) {
        return(13)
      }
      if(opacity14 == 0.5) {
        return(14)
      }
      if(opacity15 == 0.5) {
        return(15)
      }
      if(opacity16 == 0.5) {
        return(16)
      }
      if(opacity17 == 0.5) {
        return(17)
      }
      if(opacity18 == 0.5) {
        return(18)
      }
      if(opacity19 == 0.5) {
        return(19)
      }
      if(opacity20 == 0.5) {
        return(20)
      }
      if(opacity21 == 0.5) {
        return(21)
      }
      if(opacity22 == 0.5) {
        return(22)
      }
      if(opacity23 == 0.5) {
        return(23)
      }
      if(opacity24 == 0.5) {
        return(24)
      }
      if(opacity25 == 0.5) {
        return(25)
      }
      if(opacity26 == 0.5) {
        return(26)
      }
      if(opacity27 == 0.5) {
        return(27)
      }
      if(opacity28 == 0.5) {
        return(28)
      }
      if(opacity29 == 0.5) {
        return(29)
      }
      if(opacity30 == 0.5) {
        return(30)
      }
      if(opacity31 == 0.5) {
        return(31)
      }
      if(opacity32 == 0.5) {
        return(32)
      }
      if(opacity33 == 0.5) {
        return(33)
      }
      if(opacity34 == 0.5) {
        return(34)
      }
      if(opacity35 == 0.5) {
        return(35)
      }
      if(opacity36 == 0.5) {
        return(36)
      }
      if(opacity37 == 0.5) {
        return(37)
      }
      if(opacity38 == 0.5) {
        return(38)
      }
      if(opacity39 == 0.5) {
        return(39)
      }
      if(opacity40 == 0.5) {
        return(40)
      }
      if(opacity41 == 0.5) {
        return(41)
      }
      if(opacity42 == 0.5) {
        return(42)
      }
      if(opacity43 == 0.5) {
        return(43)
      }
      if(opacity44 == 0.5) {
        return(44)
      }
      if(opacity45 == 0.5) {
        return(45)
      }
      if(opacity46 == 0.5) {
        return(46)
      }
      if(opacity47 == 0.5) {
        return(47)
      }
      if(opacity48 == 0.5) {
        return(48)
      } else {
        return(17)
      }
    }

    function avatarurl(){
      //console.log(item)
      if (choisiravatar() == 1) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043264-avatar-nun-sister-woman_113241.png")
      }
      if (choisiravatar() == 2) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043270-avatar-joker-squad-suicide-woman_113256.png")
      }
      if (choisiravatar() == 3) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043229-afro-avatar-male-man_113276.png")
      }
      if (choisiravatar() == 4) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043231-afro-female-person-woman_113288.png")
      }
      if (choisiravatar() == 5) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043233-anime-away-face-no-nobody-spirited_113254.png")
      }
      if (choisiravatar() == 6) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043230-apple-avatar-illness-sick-watch_113265.png")
      }
      if (choisiravatar() == 7) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043237-avatar-avocado-food-scream_113277.png")
      }
      if (choisiravatar() == 8) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043239-baby-child-kid-toddler_113286.png")
      }
      if (choisiravatar() == 9) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043232-avatar-batman-comics-hero_113278.png")
      }
      if (choisiravatar() == 10) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043234-animal-avatar-bear-russian_113283.png")
      }
      if (choisiravatar() == 11) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043235-afro-boy-child-kid_113264.png")
      }
      if (choisiravatar() == 12) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043236-avatar-boy-male-portrait_113250.png")
      }
      if (choisiravatar() == 13) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043238-avatar-boy-kid-person_113284.png")
      }
      if (choisiravatar() == 14) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043240-avatar-bad-breaking-chemisrty-heisenberg_113279.png")
      }
      if (choisiravatar() == 15) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043241-builder-helmet-worker_113249.png")
      }
      if (choisiravatar() == 16) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043242-avatar-cacti-cactus-pirate_113248.png")
      }
      if (choisiravatar() == 17) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043243-actor-chaplin-comedy-man_113289.png")
      }
      if (choisiravatar() == 18) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043244-avatar-cloud-crying-rain_113246.png")
      }
      if (choisiravatar() == 19) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043245-avatar-coffee-cup-zorro_113282.png")
      }
      if (choisiravatar() == 20) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043246-addicted-draw-love-pencil_113251.png")
      }
      if (choisiravatar() == 21) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043247-1-avatar-female-portrait-woman_113261.png")
      }
      if (choisiravatar() == 22) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043248-avatar-female-portrait-woman_113285.png")
      }
      if (choisiravatar() == 23) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043249-avatar-geisha-japanese-woman_113275.png")
      }
      if (choisiravatar() == 24) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043250-avatar-child-girl-kid_113270.png")
      }
      if (choisiravatar() == 25) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043251-avatar-female-girl-woman_113291.png")
      }
      if (choisiravatar() == 26) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043252-child-girl-kid-person_113255.png")
      }
      if (choisiravatar() == 27) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043254-avatar-elderly-grandma-nanny_113280.png")
      }
      if (choisiravatar() == 28) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043253-friday-halloween-jason-movie_113258.png")
      }
      if (choisiravatar() == 29) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043266-avatar-dead-monster-zombie_113260.png")
      }
      if (choisiravatar() == 30) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043255-beard-hipster-male-man_113243.png")
      }
      if (choisiravatar() == 31) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043256-indian-male-man-person_113262.png")
      }
      if (choisiravatar() == 32) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043257-indian-man-sikh-turban_113257.png")
      }
      if (choisiravatar() == 33) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043258-boy-indian-kid-native_113281.png")
      }
      if (choisiravatar() == 34) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043259-avatar-hindi-indian-woman_113247.png")
      }
      if (choisiravatar() == 35) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043260-avatar-male-man-portrait_113269.png")
      }
      if (choisiravatar() == 36) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043261-artist-avatar-marilyn-monroe_113252.png")
      }
      if (choisiravatar() == 37) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043262-avatar-man-muslim_113273.png")
      }
      if (choisiravatar() == 38) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043263-avatar-muslim-paranja-woman_113263.png")
      }
      if (choisiravatar() == 39) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043265-male-man-old-portrait_113253.png")
      }
      if (choisiravatar() == 40) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043275-avatar-man-person-punk_113271.png")
      }
      if (choisiravatar() == 41) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043276-christmas-clous-santa_113290.png")
      }
      if (choisiravatar() == 42) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043274-avatar-einstein-professor-scientist_113259.png")
      }
      if (choisiravatar() == 43) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043273-animal-avatar-mutton-sheep_113242.png")
      }
      if (choisiravatar() == 44) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043272-avatar-lazybones-sloth-sluggard_113274.png")
      }
      if (choisiravatar() == 45) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043271-avatar-bug-insect-spider_113268.png")
      }
      if (choisiravatar() == 46) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043269-avatar-male-president-trump_113267.png")
      }
      if (choisiravatar() == 47) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043268-alien-avatar-space-ufo_113272.png")
      }
      if (choisiravatar() == 48) {
        return("https://cdn.icon-icons.com/icons2/1736/PNG/128/4043267-fighter-luchador-man-wrestler_113266.png")
      }
    }


async function AddStudent() {

  
const addusers = db.collection('users').doc(text);
const doc = await addusers.get();
if (!doc.exists) {
    let date = new Date();
    let formattedDate = format(date, "dd/MM/yyyy");
    let a = Math.random().toString(36).substring(7) 
    
      const addusers = db.collection('users');
    
      await addusers.doc(text).set({
        name: text, password: text2, platform: Platform.OS,
        date: formattedDate, avatar: choisiravatar(),
        avatarurl: avatarurl(),id: a
      });

      storeDataUser()
      storeDataPass()
    
      navigation.navigate("Accueil", {item: text, avatar: choisiravatar(), avatarurl: avatarurl(),id: a})
} else {
    AlertPopUp();
    }
}

function leane(){
  if (choisiravatar() == 1) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043264-avatar-nun-sister-woman_113241.png"})
  }
  if (choisiravatar() == 2) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043270-avatar-joker-squad-suicide-woman_113256.png"})
  }
  if (choisiravatar() == 3) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043229-afro-avatar-male-man_113276.png"})
  }
  if (choisiravatar() == 4) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043231-afro-female-person-woman_113288.png"})
  }
  if (choisiravatar() == 5) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043233-anime-away-face-no-nobody-spirited_113254.png"})
  }
  if (choisiravatar() == 6) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043230-apple-avatar-illness-sick-watch_113265.png"})
  }
  if (choisiravatar() == 7) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043237-avatar-avocado-food-scream_113277.png"})
  }
  if (choisiravatar() == 8) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043239-baby-child-kid-toddler_113286.png"})
  }
  if (choisiravatar() == 9) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043232-avatar-batman-comics-hero_113278.png"})
  }
  if (choisiravatar() == 10) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043234-animal-avatar-bear-russian_113283.png"})
  }
  if (choisiravatar() == 11) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043235-afro-boy-child-kid_113264.png"})
  }
  if (choisiravatar() == 12) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043236-avatar-boy-male-portrait_113250.png"})
  }
  if (choisiravatar() == 13) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043238-avatar-boy-kid-person_113284.png"})
  }
  if (choisiravatar() == 14) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043240-avatar-bad-breaking-chemisrty-heisenberg_113279.png"})
  }
  if (choisiravatar() == 15) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043241-builder-helmet-worker_113249.png"})
  }
  if (choisiravatar() == 16) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043242-avatar-cacti-cactus-pirate_113248.png"})
  }
  if (choisiravatar() == 17) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043243-actor-chaplin-comedy-man_113289.png"})
  }
  if (choisiravatar() == 18) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043244-avatar-cloud-crying-rain_113246.png"})
  }
  if (choisiravatar() == 19) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043245-avatar-coffee-cup-zorro_113282.png"})
  }
  if (choisiravatar() == 20) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043246-addicted-draw-love-pencil_113251.png"})
  }
  if (choisiravatar() == 21) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043247-1-avatar-female-portrait-woman_113261.png"})
  }
  if (choisiravatar() == 22) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043248-avatar-female-portrait-woman_113285.png"})
  }
  if (choisiravatar() == 23) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043249-avatar-geisha-japanese-woman_113275.png"})
  }
  if (choisiravatar() == 24) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043250-avatar-child-girl-kid_113270.png"})
  }
  if (choisiravatar() == 25) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043251-avatar-female-girl-woman_113291.png"})
  }
  if (choisiravatar() == 26) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043252-child-girl-kid-person_113255.png"})
  }
  if (choisiravatar() == 27) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043254-avatar-elderly-grandma-nanny_113280.png"})
  }
  if (choisiravatar() == 28) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043253-friday-halloween-jason-movie_113258.png"})
  }
  if (choisiravatar() == 29) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043266-avatar-dead-monster-zombie_113260.png"})
  }
  if (choisiravatar() == 30) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043255-beard-hipster-male-man_113243.png"})
  }
  if (choisiravatar() == 31) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043256-indian-male-man-person_113262.png"})
  }
  if (choisiravatar() == 32) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043257-indian-man-sikh-turban_113257.png"})
  }
  if (choisiravatar() == 33) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043258-boy-indian-kid-native_113281.png"})
  }
  if (choisiravatar() == 34) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043259-avatar-hindi-indian-woman_113247.png"})
  }
  if (choisiravatar() == 35) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043260-avatar-male-man-portrait_113269.png"})
  }
  if (choisiravatar() == 36) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043261-artist-avatar-marilyn-monroe_113252.png"})
  }
  if (choisiravatar() == 37) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043262-avatar-man-muslim_113273.png"})
  }
  if (choisiravatar() == 38) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043263-avatar-muslim-paranja-woman_113263.png"})
  }
  if (choisiravatar() == 39) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043265-male-man-old-portrait_113253.png"})
  }
  if (choisiravatar() == 40) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043275-avatar-man-person-punk_113271.png"})
  }
  if (choisiravatar() == 41) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043276-christmas-clous-santa_113290.png"})
  }
  if (choisiravatar() == 42) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043274-avatar-einstein-professor-scientist_113259.png"})
  }
  if (choisiravatar() == 43) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043273-animal-avatar-mutton-sheep_113242.png"})
  }
  if (choisiravatar() == 44) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043272-avatar-lazybones-sloth-sluggard_113274.png"})
  }
  if (choisiravatar() == 45) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043271-avatar-bug-insect-spider_113268.png"})
  }
  if (choisiravatar() == 46) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043269-avatar-male-president-trump_113267.png"})
  }
  if (choisiravatar() == 47) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043268-alien-avatar-space-ufo_113272.png"})
  }
  if (choisiravatar() == 48) {
    return({uri :  "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043267-fighter-luchador-man-wrestler_113266.png"})
  }
}

const [modalVisible, setModalVisible] = useState(false);

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

    const storeDataUser = async (value) => {
      try {
        await AsyncStorage.setItem('@storage_User', text)
      } catch (e) {
        // saving error
      }
    }
    const storeDataPass = async (value) => {
      try {
        await AsyncStorage.setItem('@storage_Pass', text2)
      } catch (e) {
        // saving error
      }
    }
    
  return (
    <View style={styles.container}>
    <View style={styles.circle}/>
    <Modal
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);}}>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: "#f5f6f7",fontWeight: "bold", fontSize: 20}}>Choisir un avatar</Text>
            <ScrollView style={{height: 500, width: 250, marginTop: 20}} showsVerticalScrollIndicator={false}>


            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar1()}>
            <Image source={require('../assets/heros/1.png')} opacity={opacity1} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar2()}>
            <Image source={require('../assets/heros/2.png')} opacity={opacity2} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar3()}>
            <Image source={require('../assets/heros/3.png')} opacity={opacity3} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar4()}>
            <Image source={require('../assets/heros/4.png')} opacity={opacity4} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar5()}>
            <Image source={require('../assets/heros/5.png')} opacity={opacity5} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar6()}>
            <Image source={require('../assets/heros/6.png')} opacity={opacity6} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar7()}>
            <Image source={require('../assets/heros/7.png')} opacity={opacity7} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar8()}>
            <Image source={require('../assets/heros/8.png')} opacity={opacity8} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar9()}>
            <Image source={require('../assets/heros/9.png')} opacity={opacity9} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar10()}>
            <Image source={require('../assets/heros/10.png')} opacity={opacity10} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar11()}>
            <Image source={require('../assets/heros/11.png')} opacity={opacity11} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar12()}>
            <Image source={require('../assets/heros/12.png')} opacity={opacity12} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar13()}>
            <Image source={require('../assets/heros/13.png')} opacity={opacity13} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar14()}>
            <Image source={require('../assets/heros/14.png')} opacity={opacity14} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar15()}>
            <Image source={require('../assets/heros/15.png')} opacity={opacity15} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar16()}>
            <Image source={require('../assets/heros/16.png')} opacity={opacity16} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar17()}>
            <Image source={require('../assets/heros/17.png')} opacity={opacity17} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar18()}>
            <Image source={require('../assets/heros/18.png')} opacity={opacity18} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar19()}>
            <Image source={require('../assets/heros/19.png')} opacity={opacity19} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar20()}>
            <Image source={require('../assets/heros/20.png')} opacity={opacity20} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar21()}>
            <Image source={require('../assets/heros/21.png')} opacity={opacity21} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar22()}>
            <Image source={require('../assets/heros/22.png')} opacity={opacity22} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar23()}>
            <Image source={require('../assets/heros/23.png')} opacity={opacity23} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar24()}>
            <Image source={require('../assets/heros/24.png')} opacity={opacity24} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar25()}>
            <Image source={require('../assets/heros/25.png')} opacity={opacity25} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar26()}>
            <Image source={require('../assets/heros/26.png')} opacity={opacity26} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar27()}>
            <Image source={require('../assets/heros/27.png')} opacity={opacity27} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar28()}>
            <Image source={require('../assets/heros/28.png')} opacity={opacity28} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar29()}>
            <Image source={require('../assets/heros/29.png')} opacity={opacity29} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar30()}>
            <Image source={require('../assets/heros/30.png')} opacity={opacity30} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar31()}>
            <Image source={require('../assets/heros/31.png')} opacity={opacity31} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar32()}>
            <Image source={require('../assets/heros/32.png')} opacity={opacity32} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar33()}>
            <Image source={require('../assets/heros/33.png')} opacity={opacity33} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar34()}>
            <Image source={require('../assets/heros/34.png')} opacity={opacity34} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar35()}>
            <Image source={require('../assets/heros/35.png')} opacity={opacity35} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar36()}>
            <Image source={require('../assets/heros/36.png')} opacity={opacity36} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar37()}>
            <Image source={require('../assets/heros/37.png')} opacity={opacity37} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar38()}>
            <Image source={require('../assets/heros/38.png')} opacity={opacity38} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar39()}>
            <Image source={require('../assets/heros/39.png')} opacity={opacity39} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar40()}>
            <Image source={require('../assets/heros/40.png')} opacity={opacity40} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar41()}>
            <Image source={require('../assets/heros/41.png')} opacity={opacity41} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar42()}>
            <Image source={require('../assets/heros/42.png')} opacity={opacity42} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar43()}>
            <Image source={require('../assets/heros/43.png')} opacity={opacity43} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar44()}>
            <Image source={require('../assets/heros/44.png')} opacity={opacity44} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar45()}>
            <Image source={require('../assets/heros/45.png')} opacity={opacity45} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 250, marginTop: 5}}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar46()}>
            <Image source={require('../assets/heros/46.png')} opacity={opacity46} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar47()}>
            <Image source={require('../assets/heros/47.png')} opacity={opacity47} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => avatar48()}>
            <Image source={require('../assets/heros/48.png')} opacity={opacity48} style={{width: 80, height: 80, borderRadius: 40}}/>
            </TouchableOpacity>
            </View>


            </ScrollView>
            <IconButton
        icon="check"
        color={'#f5f6f7'}
        size={30}
        style={{ backgroundColor: '#ee9005', marginBottom: -20, marginTop: 20}}
        onPress={() => setModalVisible(!modalVisible)}
      />
          </View>
        </View>
      </Modal>
    <View style={{marginTop: 70}}>
    <IconButton
        icon="card-text"
        color={'#f5f6f7'}
        size={120}
        style={{alignSelf: 'center'}}
      />
      <View style={{marginHorizontal: 32, marginTop: -40}}>
      <Text style={styles.header}>Créer un compte</Text>
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
        value={text2}
        secureTextEntry={visible}
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
      <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
      <Text style={{color: '#f5f6f7', marginTop: 30, alignSelf: 'center', marginLeft: -100}}>Vous avez un compte ? Connexion !</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20}}>
      <Image source={leane()} style={{width: 70, height: 70, borderRadius: 35}}/>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Text style={{color: '#f5f6f7', marginTop: 20, alignSelf: 'center', marginLeft: 30, fontSize: 20}}>Choisir un avatar ?</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems: 'flex-end', marginTop: 10}}>
      <IconButton
        icon="arrow-right"
        color={'#f5f6f7'}
        size={60}
        style={{ backgroundColor: '#ee9005'}}
        onPress={() => AddStudent()}
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 500,
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
})

export default Inscription;