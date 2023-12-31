import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text, style } from "react-native";


const Stylessteps = () => {
  return (
    <View style={stepCounterStyles.container}>
      <Image
        source={require("../../assets/steprec.png")}
        style={stepCounterStyles.steprec}
      />
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
  container: {
    flexDirection: 'row',
    margin: 6,
    top: 863,
    left: 166,
    right: 167,
     
  },
  step1: {
    width: 12,
    height: 11,
    borderRadius: 9999,
    marginLeft: 6,
  },
  step2: {
    width: 12,
    height: 11,
    borderRadius: 9999,
    marginLeft: 6,
    
  },
  step3: {
    width: 12,
    height: 11,
    borderRadius: 9999,
    marginLeft: 6,
    
  },
  steprec: {
    width: 45,
    height: 11,
    borderRadius: 12,
    marginLeft: 6,
  },
});

export default Stylessteps;

