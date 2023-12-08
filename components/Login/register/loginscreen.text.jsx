import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const styleregisteroneText = StyleSheet.create({
  Tittle: {
    color: '#FFFFFF',
    fontSize: 28.52,
    fontFamily: 'Roboto',
    lineHeight: 33.42,
    fontWeight: '900',
    wordWrap: 'break-word',
    width: 169,
    height: 99,
    top: 320,
    left: 55,
    textAlign: 'center',
    
  },
  Singup: {
    color: '#FFFFFF',
    fontSize: 25.52,
    lineHeight: 33.42,
    fontFamily: 'Roboto',
    fontWeight: '900',
    wordWrap: 'break-word',
    width: 270,
    height: 33,
    top: 390,
    left: 55,
  },

    
    
});

const LoginScreenText = () => {
  return (
    <View style={styleregisteroneText.container}>
      <Text style={styleregisteroneText.Tittle}>Connect with Your favorite Artists</Text>
      <Text style={styleregisteroneText.Singup}>Sign In</Text>
    </View>
  );
};

export default LoginScreenText;

