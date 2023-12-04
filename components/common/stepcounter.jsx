import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text, style } from "react-native";


const Stylessteps = () => {
  return (
    <View >
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
      <Image
        source={require("../../assets/steprec.png")}
        style={stepCounterStyles.steprec}
      />
    </View>

  );
};

export const stepCounterStyles = StyleSheet.create({
  step1: {
    width: 8,
    height: 8,
    position: "absolute",
    top: 863,
    left: 222,
  },
  step2: {
    width: 8,
    height: 8,
    position: "absolute",
    top: 863,
    left: 236,
  },
  step3: {
    width: 8,
    height: 8,
    position: "absolute",
    top: 863,
    left: 250,
  },
  steprec: {
    width: 45,
    height: 8,
    position: "absolute",
    borderRadius: 8500,
    top: 863,
    left: 171,
  },
});

export default Stylessteps;

