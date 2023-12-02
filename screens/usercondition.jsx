import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import ButtonUser from "../components/homescreen/Buttonuser.yes.no";
import ButtonContinue from "../components/homescreen/Buttonuser.continue";
const Usercondition = () => {
  return (
    <ImageBackground
      source={require("../assets/intro1.png")} 
      style={styles.background}
    >
      <View style={styles.container}>
        <ButtonUser />
        <ButtonContinue />
        {/* Otros componentes aquí */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 828,
        height: 1792,
        flexShrink: 0,
      },
      backgroundImage: {
        flex: 0,
        width: "100%",
        height: "100%",
      },
});

export default Usercondition;

