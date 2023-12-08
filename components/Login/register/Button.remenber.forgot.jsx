import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonRememberForgot() {
  const [isRememberChecked, setIsRememberChecked] = useState(false);

  const handleRememberPress = () => {
    setIsRememberChecked(!isRememberChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={handleRememberPress}>
          <View style={styles.rememberContainer}>
            {isRememberChecked ? (
              <Ionicons name="checkmark-circle" size={24} color="white" />
            ) : (
              <Ionicons name="ellipse-outline" size={24} color="gray" />
            )}
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotPasswordText}>Forgot the password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    top: 515,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotContainer: {
    marginLeft: 50,
  },
  rememberText: {
    color: "#FFFFFF",
    fontSize: 17.88,
    fontWeight: "300",
    lineHeight: 19.33,
    textAlign: "center",
  },
  forgotPasswordText: {
    color: "#FFFFFF",
    fontSize: 17.88,
    fontWeight: "800",
    lineHeight: 19.33,
    textAlign: "center",
  },
});