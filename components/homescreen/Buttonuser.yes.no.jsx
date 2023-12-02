import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonCotinue from "./Buttonuser.continue";

export default function ButtonUser() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonyes}>
        <Text style={styles.buttonTextyes}>YES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonno}>
        <Text style={styles.buttonTextno}>NO</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      position: "absolute",
      bottom: 250,
      left: 60,
      flexDirection: "row",
    },
    buttonyes: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: 100,
      height: 80,
      backgroundColor: "#CBFC01",
      borderRadius: 9999,
      borderWidth: 2,
      borderColor: "black",
      marginRight: 15,
      justifyContent: "center",
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
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: 100,
      height: 80,
      borderRadius: 9999,
      borderWidth: 2,
      borderColor: "black",
      justifyContent: "center",
    },
    buttonTextno: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center", 
      lineHeight: 50,
    },
    
  });