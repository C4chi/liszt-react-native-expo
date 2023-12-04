import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonContinue from "./Buttonuser.continue";

export default function ButtonUser() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonyes}>
        <Text style={styles.buttonTextyes}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonno}>
        <Text style={styles.buttonTextno}>No</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    position: "absolute",
    top: 669,
  },
  buttonyes: {
    width: 77,
    height: 55,
    backgroundColor: "#CBFC01",
    borderRadius: 25.81,
    justifyContent: "center",
    position: "absolute", 
    left: 108.54,
  },
  buttonTextyes: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
  },

  buttonno: {
    backgroundColor: "black",
    width: 77,
    height: 55,
    borderRadius: 25.81,
    justifyContent: "center",
    position: "absolute", 
    left: 19,
  },
  buttonTextno: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
  },
});
