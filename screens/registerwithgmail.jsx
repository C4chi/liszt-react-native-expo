import React, { useState } from "react";
import { View, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from "react-native";
import StylesstepsSocial from "../components/common/stepcounterSocial";


const Registerwithgmail = () => {
  return (
    <ImageBackground
      source={require("../assets/registercover.png")}
      style={styles.backgroundImage}
      
    >
      <Image source={require("../assets/registeremailgreycover.png")} style={styles.covergrey} />

      <View style={styles.container}>
        {/* Componentes actuales */}
        <Text style={styleregisterfacebookText.Tittle}>Connect with Your favorite Artists</Text>
        <Text style={styleregisterfacebookText.wants}>Wants to connect your date with our service</Text>
        <Text style={styleregisterfacebookText.liszt}>Liszt</Text>
        
        
       </View>
      <Image source={require("../assets/gmail.png")} style={stylecircle.social} />
      <Image source={require("../assets/profile.png")} style={stylecircle.profile} />
      <View>
            <TouchableOpacity style={stylescontinue.continue}>
            <Text style={stylescontinue.buttontext}>Continue</Text>
          </TouchableOpacity>
      </View>
    <StylesstepsSocial/>
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

const styleregisterfacebookText = StyleSheet.create({
  Tittle: {
    color: '#FFFFFF',
    fontSize: 28.52,
    fontFamily: 'Roboto',
    lineHeight: 33.42,
    fontWeight: '900',
    width: 169,
    height: 99,
    top: 250,
    left: 5,
    textAlign: 'center',  
  },
  wants: {
    fontWeight: '300',
    fontSize :  21.88,
    lineHeight: 20.3,
    color: '#FFFFFF',
    width: 180,
    height: 61,
    textAlign: 'center',
    top: 610,
    left:10,
   },
   liszt: {
     fontFamily: 'Roboto',
     fontWeight: '900',
     color: '#FFFFFF',
     fontSize: 28.52,
     lineHeight: 33.42,
     textAlign: 'center',
     top: 500
   },
});

const stylecircle = StyleSheet.create({ 
  profile: {
    width: 85,
    height: 85,
    borderRadius: 50,
    top:363,
    left:206,

    
  },

  social: {
    width: 85,
    height: 85,
    borderRadius: 50,
    top: 446,
    left: 139,
    },
  
  
});

const stylescontinue = StyleSheet.create({
  continue: {
    top:585,
    left: 25,
    backgroundColor: "#000000",
    height: 56,
    width: 381,
    borderRadius: 28,
    alignContent: "center",
    justifyContent: "center",
  },
    buttontext: {
      color: "white",
      fontFamily: "Roboto",
      fontSize: 28.52,
      fontWeight: "900",
      lineHeight : 33.42,
      textAlign: "center", 
    
  },
});
  


export default Registerwithgmail;