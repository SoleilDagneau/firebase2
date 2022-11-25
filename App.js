import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAqFY_BHLcSmDTF7m_hgt0UkTiDLurNceo",
  authDomain: "fir-1-6760f.firebaseapp.com",
  projectId: "fir-1-6760f",
  storageBucket: "fir-1-6760f.appspot.com",
  messagingSenderId: "1026204694587",
  appId: "1:1026204694587:web:752ff7c3f3b0cbd790041e",
  measurementId: "G-RBX2LTZRZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
const db = getFirestore(app);
const analytics = getAnalytics(app);
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
