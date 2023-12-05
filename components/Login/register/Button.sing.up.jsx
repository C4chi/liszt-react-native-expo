import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonSingUp() {
  return (
    <View >
      <TouchableOpacity style={styles.buttonSingup}>
        <Text style={styles.buttonTextSingup}>Sing Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSingup: {
    backgroundColor: "#CBFC01",
    height: 56,
    width: 381,
    borderRadius: 28,
    top: 605,
    left:2,
    alignContent: "center",
    justifyContent: "center",

  },
  buttonTextSingup: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight : 30.47,
    textAlign: "center",
  },
});