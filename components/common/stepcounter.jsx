import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text,style } from "react-native";

const stylessteps = () => {
  return (
    <View style={stepCounterStyles.container}>

    <Image
      source={require("../../assets/step1.png")}
      style={styles.step1}
    />
    <Image
      source={require("../../assets/step2.png")}
      style={styles.step2}
    />
    <Image
      source={require("../../assets/step3.png")}
      style={styles.step3}
    />
    <Image
      source={require("../../assets/steprec.png")}
      style={styles.steprec}
    />
  
  </View>

);};

const styles = StyleSheet.create({
  step1: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 100,
    left: 460,
  },
  step2: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 100,
    left: 500,
  },
  step3: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 100,
    left: 540,
  },
  steprec: {
    width: 150,
    height: 30,
    position: "absolute",
    borderRadius: 8500,
    bottom: 100,
    right:395,
  },
});

export default stylessteps;
  
