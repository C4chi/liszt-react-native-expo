import React from "react";
import { View, Image, StyleSheet } from "react-native";

const StylesstepsFour = () => {
  return (
    <View style={stepCounterStyles.container}>
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
  container: {
    flexDirection: 'row',
    margin: 6, // Ajusta el margen según tus necesidades
    top: 660,
    bottom: 54,
    left: 12,
    right: 167,
    
  },
  step1: {
    width: 11,
    height: 11,
    borderRadius:9999,
    marginLeft: 6,
     
    
  },
  step2: {
    width:11,
    height: 11,
    borderRadius:9999,
    marginLeft: 6,
    
  },
  step3: {
    width: 11,
    height: 11,
    borderRadius:9999,
    marginLeft: 6,
    marginRight: 6,
  },
  steprec: {
    width: 45,
    height: 11,
    borderRadius: 9999,
    marginLeftleft: 6,
    
    
  },
});

export default StylesstepsFour;
