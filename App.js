import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/splash";
import IntroOne from './screens/intro1';
import { useFonts } from "expo-font";
import Usercondition from "./screens/usercondition";
import RegisterOne from "./screens/mainregister";
import Registerwithemail from "./screens/registerwithemail";
import RegisterwithFacebook from "./screens/registerwithfacebook";
import RegisterwithSpotify from "./screens/registerwithspotify";
import Registerwithgmail from "./screens/registerwithgmail";
import LoginScreen from "./screens/loginscreen";

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
      {/*<RegisterOne /> */}
      {/*<Registerwithemail />*/}
      {/*<RegisterwithFacebook />*/}
      {/*<RegisterwithSpotify />*/}
      {/*<Registerwithgmail />*/}
      <LoginScreen />


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
