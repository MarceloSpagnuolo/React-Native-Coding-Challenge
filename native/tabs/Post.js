import React from "react";
import { Header } from "../components/header";
import { View, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Post = (props) => {
  const { title, url } = props.route.params;
  return (
    <View style={styles.body}>
      <View style={styles.headerContainer}>
        <Header title={title} back={true} navigation={props.navigation} />
      </View>
      <View style={styles.webviewContainer}>
        <WebView source={{ uri: url }} style={styles.webview} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  webviewContainer: {
    flex: 7,
  },
  webview: {
    flex: 1,
  },
});
