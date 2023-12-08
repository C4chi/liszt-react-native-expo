import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonSingIn() {
  return (
    <View >
      <TouchableOpacity style={styles.buttonContinue}>
        <Text style={styles.buttonTextContinue}>Sing In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContinue: {
    backgroundColor: "#CBFC01",
    height: 56,
    width: 381,
    borderRadius: 28,
    alignContent: "center",
    justifyContent: "center",
    top: 610,
    
  },
  buttonTextContinue: {
    color: "black",
    fontFamily: "Roboto",
    fontSize: 28.52,
    fontWeight: "900",
    lineHeight : 33.42,
    textAlign: "center",
  },
});