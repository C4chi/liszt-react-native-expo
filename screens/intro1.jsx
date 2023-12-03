import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { stylesIntro1Text } from "../components/homescreen/intro1.text";
import Stylessteps from "../components/common/Stepcounter";

const IntroOne = () => {
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

        <Image source={require("../assets/Ellipse 1.svg")} style={styles.ellipse1} />
        <Image source={require("../assets/Ellipse 2.svg")} style={styles.ellipse2} />
        <Image source={require("../assets/Ellipse 3.svg")} style={styles.ellipse3} />

        <View style={styles.stepsContainer}>
          <Stylessteps />
        </View>

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
    flex: 1,
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
   stepsContainer: {
    position: 'absolute',
    bottom: -120,
    alignSelf: 'center',
  },

});
export default IntroOne;
