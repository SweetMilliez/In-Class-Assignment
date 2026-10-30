import { useState } from 'react';
import { Pressable, Text, TextInput, View } from "react-native";

const FormSignUp = () => {
  const [firstName, setFirstName] = useState('Placeholder');
  const [lastName , setLastName] = useState('Placeholder');
  const [email, setEmail] = useState('Placeholder');
  const [password, setPassword] = useState('Placeholder');



  return(
    <View>
      <Text>Welcome to the Bakugan Forums</Text>
      <Text>Please sign in below</Text>
      <TextInput
      placeholder="Email"
      keyboardType='email-address'
      value={email}
      onChangeText={setEmail}
      />
       <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Pressable>
        <Text>Sign In</Text>
      </Pressable>


    </View>


)}
