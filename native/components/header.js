import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import arrow from "../assets/arrow.png";

export const Header = (props) => {
  var { title, back, navigation } = props;
  if (title.length > 19) {
    title = title.slice(0, 20) + "...";
  }

  return (
    <>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backContainer}>
            <Image source={arrow} style={styles.image} />
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  backContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
