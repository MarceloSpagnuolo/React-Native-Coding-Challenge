import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { GetNews, GetPopular, GetTop, GetHot } from "../store/action";

export const Menu = () => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState("new");

  function handleNew() {
    setSelectedButton("new");
    dispatch(GetNews());
  }
  function handlePopular() {
    setSelectedButton("popular");
    dispatch(GetPopular());
  }
  function handleTop() {
    setSelectedButton("top");
    dispatch(GetTop());
  }
  function handleHot() {
    setSelectedButton("hot");
    dispatch(GetHot());
  }

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={selectedButton === "new" ? styles.newSelected : styles.new}
        onPress={handleNew}
      >
        <Text
          style={
            selectedButton === "new" ? styles.textNewSelectd : styles.textNew
          }
        >
          New
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          selectedButton === "popular" ? styles.popularSelected : styles.popular
        }
        onPress={handlePopular}
      >
        <Text
          style={
            selectedButton === "popular"
              ? styles.textPopularSelected
              : styles.textPopular
          }
        >
          Popular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selectedButton === "top" ? styles.topSelected : styles.top}
        onPress={handleTop}
      >
        <Text
          style={
            selectedButton === "top" ? styles.textTopSelected : styles.textTop
          }
        >
          Top
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selectedButton === "hot" ? styles.hotSelected : styles.hot}
        onPress={handleHot}
      >
        <Text
          style={
            selectedButton === "hot" ? styles.textHotSelected : styles.textHot
          }
        >
          Hot
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
  },
  new: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  newSelected: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "deepskyblue",
  },
  textNew: {
    color: "deepskyblue",
  },
  textNewSelectd: {
    color: "white",
  },
  popular: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popularSelected: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "deepskyblue",
  },
  textPopular: {
    color: "deepskyblue",
  },
  textPopularSelected: {
    color: "white",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topSelected: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "deepskyblue",
  },
  textTop: {
    color: "deepskyblue",
  },
  textTopSelected: {
    color: "white",
  },
  hot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hotSelected: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "deepskyblue",
  },
  textHot: {
    color: "deepskyblue",
  },
  textHotSelected: {
    color: "white",
  },
});
