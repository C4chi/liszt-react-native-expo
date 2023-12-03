import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text, style } from "react-native";


const Stylessteps = () => {
  return (
    <View style={stepCounterStyles.steprec}>
      <Image
        source={require("../../assets/step1.png")}
        style={stepCounterStyles.step1}
      />
      <Image
        source={require("../../assets/step2.png")}
        style={stepCounterStyles.step2}
      />
      <Image
        source={require("../../assets/step3.png")}
        style={stepCounterStyles.step3}
      />
    </View>

  );
};

export const stepCounterStyles = StyleSheet.create({
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
    right: 395,
  },
});

export default Stylessteps;

