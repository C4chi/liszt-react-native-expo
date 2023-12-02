import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/splash";
import Intro1 from "./screens/intro1";
import {useFonts} from 'expo-font';
import Usercondition from './screens/usercondition';

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-regular.ttf'),
  })
  return (
    <View style={styles.container}>
      <HomeScreen />      
      {/*<Intro1 />*/}
      <Usercondition />
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