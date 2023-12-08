import React, { useState } from "react";
import { View, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import ButtonRememberForgot from "../components/Login/register/Button.remenber.forgot";
import StylesstepsFour from "../components/common/stepcounterFour";


const Registerwithemail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground
      source={require("../assets/registercover.png")}
      style={styles.backgroundImage}
      
    >
      <Image source={require("../assets/registeremailgreycover.png")} style={styles.covergrey} />

      <View style={styles.container}>
        {/* Componentes actuales */}
        <Text style={styleregisteremailText.Tittle}>Connect with Your favorite Artists</Text>
        <Text style={styleregisteremailText.Singin}>Sign In</Text>
        
        
        
        
        <Text style={stylesinput.title}>Email*</Text>
        {/* Campos de entrada para correo electrónico y contraseña */}
        <View style={stylesinput.Container}>
        <TextInput
          style={stylesinput.input}
          placeholder="example@email.com"
          placeholderTextColor="black"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        </View>
        <Text style={stylesinput.title}>    Password*</Text>
        <View style={stylesinput.Container}>
          <TextInput
            style={stylesinput.passwordInput}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={stylesinput.toggleButton}>
            <Feather name={showPassword ? "eye-off" : "eye"} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ButtonRememberForgot />
          <View>
            <TouchableOpacity style={stylessingin.singin}>
            <Text style={stylessingin.buttonTextContinue}>Sing In</Text>
          </TouchableOpacity>
            
            </View>
        <StylesstepsFour/>

      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 0,
    width: 430,
    height: 932,
    
  },
  covergrey: {
    width: 430,
    height: 533,
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
    position: "absolute",
    top: 399,
    left: 0,
  },

});

const stylessingin = StyleSheet.create({
  singin: {
    top:570,
    left: 7,
    backgroundColor: "#CBFC01",
    height: 56,
    width: 381,
    borderRadius: 28,
    alignContent: "center",
    justifyContent: "center",
  },
    buttonTextContinue: {
      color: "black",
      fontFamily: "Roboto",
      fontSize: 28.52,
      fontWeight: "900",
      lineHeight : 33.42,
      textAlign: "center", 
    
  },
})

const stylesinput = StyleSheet.create({
  
 title: {
    color: "white",
    fontWeight: "regular",
    top: 527,
    marginBottom: 2,
    right: 150,
    alignContent: "center",
        
    },
  input: {
    width: 381,
    height: 48,
    borderRadius: 28,
    backgroundColor: "#fff",
    marginVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
    
    
  },
  Container: {
    flexDirection: "row",
    alignItems: "center",
    top:515,
    
  },
  passwordInput: {
    flex: 1,
    width: 381,
    height: 48,
    borderRadius: 28,
    backgroundColor: "#fff",
    marginVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
    
    
  },
  toggleButton: {
    padding: 5,
    color: "black",
    position: "absolute",
    right: 10,
  },
});

  const styleregisteremailText = StyleSheet.create({
    Tittle: {
      color: '#FFFFFF',
      fontSize: 28.52,
      fontFamily: 'Roboto',
      lineHeight: 33.42,
      fontWeight: '900',
      width: 169,
      height: 99,
      top: 380,
      left: 5,
      textAlign: 'center',
      
    },
    Singin: {
      color: '#FFFFFF',
      fontSize: 25.52,
      lineHeight: 33.42,
      fontFamily: 'Roboto',
      fontWeight: '900',
      wordWrap: 'break-word',
      width: 270,
      height: 33,
      top: 525,
      left: 100,
    },
  
});

export default Registerwithemail;