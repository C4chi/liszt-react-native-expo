import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/splash";
import IntroOne from './screens/intro1';
import { useFonts } from "expo-font";
import Usercondition from "./screens/usercondition";
import RegisterOne from "./screens/register";

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-regular.ttf"),
    Roboto: require("./assets/fonts/Roboto-black.ttf"),
    Roboto: require("./assets/fonts/Roboto-bold.ttf"),
  });
  return (
    <View style={styles.container}>
      {/*<HomeScreen />*/}
      {/*<IntroOne />*/}
      {/*<Usercondition />*/} 
      <RegisterOne />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
