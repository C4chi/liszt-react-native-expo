import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonContinue() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonContinue}>
        <Text style={styles.buttonTextContinue}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 150, 
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  buttonContinue: {
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 150,
    width: 100,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextContinue: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
                        