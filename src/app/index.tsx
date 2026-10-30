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
      <Text>Welcome to the Bakugan Forums</Text>
      <Text>Please Sign up below</Text>
      <TextInput
      style={styles.input}
      placeholder="Jane"
      value={firstName}
      onChangeText={setFirstName}
      />

      <TextInput
      style={styles.input}
      placeholder="Doe"
      value={lastName}
      onChangeText={setLastName}
      />

      <TextInput
      style={styles.input}
      placeholder="Email"
      keyboardType='email-address'
      value={email}
      onChangeText={setEmail}
      />
       <TextInput
       style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />




      <Pressable style={styles.button} onPress={signUp}>
        <Text>Sign Up</Text>
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

  input: {
    borderWidth: 1,
    borderColor: "#080000",
    borderRadius: 6,
    padding: 8,
    marginBottom: 5,
    backgroundColor: "white",
  },


  button: {
    backgroundColor: "#9500ff",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },



})