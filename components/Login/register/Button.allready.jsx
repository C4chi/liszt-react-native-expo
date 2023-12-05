import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonAllready() {
  const handlePress = () => {
    // Lógica que deseas ejecutar cuando se presiona el texto
    console.log("Text pressed");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.buttonTextAllready}>Already have an account?</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonTextAllready: {
    color: "#CBFC01",
    fontSize: 17.88,
    fontWeight: "800",
    lineHeight: 19.33,
    textAlign: "center",
    top:590,
    
  },
});
