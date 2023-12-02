import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { stylesIntro1Text } from "../components/homescreen/intro1.text";
import Stylessteps from "../components/common/Stepcounter";

const Intro1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/intro1.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View
          style={{
            left: 650,
            top: 1650,
            position: "absolute",
            transform: [{ rotate: "-90deg" }],
            transformOrigin: "0 0",
            width: 2000,
          }}
        >
          <Text style={stylesIntro1Text.text}>
            Find your Perfect concert
          </Text>
        </View>

        <Image
          source={require("../assets/Ellipse 1.svg")} 
          style={styles.ellipse1}
        />
        <Image
          source={require("../assets/Ellipse 2.svg")} 
          style={styles.ellipse2}
        />
        <Image
          source={require("../assets/Ellipse 3.svg")} 
          style={styles.ellipse3}
        />

        {/* Colocar Stylessteps encima de la imagen */}
        <View style={stylessteps.container}>
          <Stylessteps />
        </View>

        {/* Añadir otras imágenes si es necesario */}
        {/* <Image
          source={require("../assets/step1.png")} 
          style={stylessteps.step1}
        />  
        <Image
          source={require("../assets/step2.png")} 
          style={stylessteps.step2}
        />  
        <Image
          source={require("../assets/step3.png")} 
          style={stylessteps.step3}
        />  
        <Image
          source={require("../assets/steprec.png")} 
          style={stylessteps.steprec}
        /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 828,
    height: 1792,
    flexShrink: 0,
  },
  backgroundImage: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  ellipse1: {
    width: 300, 
    height: 300, 
    borderRadius: 9999, 
    position: "absolute",
    top: 350, 
    left: 50, 
  },
  ellipse2: {
    width: 300, 
    height: 300, 
    borderRadius: 9999, 
    position: "absolute",
    bottom: 760, 
    left: 50,
  },
  ellipse3: {
    width: 300, 
    height: 300, 
    borderRadius: 9999, 
    position: "absolute",
    bottom: 400, 
    left: 50,
  },
  
});

export default Intro1;