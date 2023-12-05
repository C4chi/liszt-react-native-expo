import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonContinue() {
  return (
    <View >
      <TouchableOpacity style={styles.buttonSingup}>
        <Text style={styles.buttonTextSingup}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSingup: {
    backgroundColor: "#000000",
    height: 56,
    width: 381,
    borderRadius: 28,
    top: 762,
    left: 25,
    alignContent: "center",
    justifyContent: "center",

  },
  buttonTextSingup: {
    color: "white",
    fontSize: 26,
    fontWeight: "500",
    lineHeight : 30.47,
    textAlign: "center",
  },
});