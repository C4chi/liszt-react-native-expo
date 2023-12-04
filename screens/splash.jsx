import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { stylesSplashText  } from "../components/homescreen/splash.text";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
  <ImageBackground
    source={require("../assets/splash.png")}
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.7,
        mixBlendMode: "luminosity",
        backgroundColor: "black",
      }}
    />
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={stylesSplashText.text}>Liszt</Text>
    </View>
  </ImageBackground>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: 430,
    height: 932,
    flexShrink: 0,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
