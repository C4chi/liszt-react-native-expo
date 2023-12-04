import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import ButtonUser from "../components/homescreen/Buttonuser.yes.no";
import ButtonContinue from "../components/homescreen/Buttonuser.continue";
import StylesConditionText from "../components/homescreen/usercondition.text";
const Usercondition = () => {
  return (
    <ImageBackground
      source={require("../assets/intro1.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Componentes actuales */}
        <ButtonUser />
        <ButtonContinue />
        <StylesConditionText />

      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    container: {
        width: 430,
        height: 932,
        flexShrink: 0,
      },
      backgroundImage: {
        flex: 0,
        width: "100%",
        height: "100%",
      },
});

export default Usercondition;

