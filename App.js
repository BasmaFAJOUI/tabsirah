// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, LogBox } from "react-native";
import MyNavigator from "./src/MyNavigator";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADHdIGZNZ9m4Gyr20HtV2GIJGE7tpc2o0",
  authDomain: "appcq-43bf0.firebaseapp.com",
  projectId: "appcq-43bf0",
  storageBucket: "appcq-43bf0.appspot.com",
  messagingSenderId: "80355512157",
  appId: "1:80355512157:web:8dc414a266bcee2affe2b4",
  measurementId: "G-17GYC47J3E",
};

// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  return (
    <View style={{ flex: 1, paddingTop: 0, backgroundColor: "#FFF" }}>
      <MyNavigator />
    </View>
  );
}
