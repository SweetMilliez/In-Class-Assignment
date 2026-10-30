import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormSignUp () {
  const [firstName, setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const router = useRouter();

  function signUp() {
    router.push("/zodsignin")
  }

  return(
    <View style={styles.container}>
      <Text style={styles.Header}>Welcome to the Bakugan Forums!</Text>
      <Text style={styles.Body}>Please Sign up below</Text>
      <TextInput
      style={styles.input}
      placeholder="Please enter your first name"
      value={firstName}
      onChangeText={setFirstName}
      />

      <TextInput
      style={styles.input}
      placeholder="Please enter your last name"
      value={lastName}
      onChangeText={setLastName}
      />

      <TextInput
      style={styles.input}
      placeholder="Please enter your email"
      keyboardType='email-address'
      value={email}
      onChangeText={setEmail}
      />
       <TextInput
       style={styles.input}
        placeholder="Please enter a password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
       <TextInput
       style={styles.input}
       placeholder="Please confirm your password"
       secureTextEntry
       />




      <Pressable style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>


    </View>


)}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#ffffff",
  },

  Header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  },

  Body: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },


  input: {
    borderWidth: 1,
    borderColor: "#080000",
    borderRadius: 6,
    padding: 8,
    marginBottom: 5,
    backgroundColor: "white",
  },


  button: {
    backgroundColor: "#f60000",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },



})