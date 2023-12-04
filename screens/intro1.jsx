import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { stylesIntro1Text } from "../components/homescreen/intro1.text";
import Stylessteps from "../components/common/stepcounter"

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
            left: 351.69,
            top: 821,
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

        <View >
          <Stylessteps />
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
  ellipse1: {
    width: 150,
    height: 150,
    borderRadius: 9999,
    position: "absolute",
    top: 214,
    left: 20,
  },
  ellipse2: {
    width: 150,
    height: 150,
    borderRadius: 9999,
    position: "absolute",
    top: 390,
    left: 20,
  },
  ellipse3: {
    width: 150,
    height: 150,
    borderRadius: 9999,
    position: "absolute",
    top: 565,
    left: 20,
  },
   stepsContainer: {
    position: 'absolute',
    top: 863,
    alignSelf: 'center',
  },

});
export default IntroOne;
