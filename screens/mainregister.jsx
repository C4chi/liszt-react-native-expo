import React, { useState } from "react";
import { View, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from "react-native";
import RegisteroneText from '../components/Login/register/mainregister.text';
import { Feather } from "@expo/vector-icons";
import ButtonSingUp from "../components/Login/register/Button.sing.up";
import ButtonAllready from "../components/Login/register/Button.allready";
import ButtonConnect from "../components/Login/register/Button.connect.plataform";
import Stylesstepsthree from "../components/common/stepcounterThree";

const RegisterOne = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground
      source={require("../assets/registercoverone.png")}
      style={styles.backgroundImage}
    >
      <Image source={require("../assets/registergreycover.png")} style={styles.covergrey} />

      <View style={styles.container}>
        {/* Componentes actuales */}
        <RegisteroneText />
        <ButtonAllready />
        <ButtonSingUp />
        <Text style={stylesinput.Connect}>or connect with</Text>
        <ButtonConnect/>
        
        
        
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
        <Stylesstepsthree/>

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
    mixBlendMode: "plus-darker",
  },
  covergrey: {
    width: 430,
    height: 674,
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
    position: "absolute",
    top: 258,
    left: 0,
  },

});

const stylesinput = StyleSheet.create({
  Connect: {
    color: "white",
    fontWeight: "regular",
    lineHeight: 19.33,
    size: 17.88,
    top: 620,
    marginBottom: 2,
    left: 10,
    alignContent: "center",
  },
 title: {
    color: "white",
    fontWeight: "regular",
    top: 310,
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
    top:300,
    
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

export default RegisterOne;



