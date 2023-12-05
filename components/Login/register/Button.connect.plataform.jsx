import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

const SocialButton = ({ platform, onPress }) => {
  let icon;

  switch (platform) {
    case "facebook":
      icon = <Icon name="facebook" size={46.57} color="#4676ED" />;
      break;
    case "spotify":
      icon = <Icon name="spotify" size={46.57} color="#7BD568" />;
      break;
    case "gmail":
      icon = <Icon name="google" size={46.57} color="#d54c4c" />;
      break;
    default:
      icon = null;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.buttonText}>Connect to {platform}</Text>
    </TouchableOpacity>
  );
};

const ButtonConnect = () => {
  const handleFacebookConnect = () => {
    // Lógica para conectar con Facebook
  };

  const handleSpotifyConnect = () => {
    // Lógica para conectar con Spotify
  };

  const handleGmailConnect = () => {
    // Lógica para conectar con Gmail
  };

  return (
    <View style={styles.container}>
      <SocialButton platform="facebook" onPress={handleFacebookConnect} />
      <SocialButton platform="spotify" onPress={handleSpotifyConnect} />
      <SocialButton platform="gmail" onPress={handleGmailConnect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top:730,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 25.72,
    marginVertical: 10,
    width: 222.31,
    height: 51.82,
  },
  iconContainer: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 15.05,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default ButtonConnect;
