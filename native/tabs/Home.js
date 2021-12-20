import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { GetNews } from "../store/action";
import { Posts } from "../components/posts";

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(GetNews());
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Header title="reddit/r/programing" back={false} />
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.posts}>
        <Posts navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 14,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "deepskyblue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menu: {
    flex: 0.7,
    borderBottomWidth: 1,
    borderBottomColor: "deepskyblue",
  },
  posts: {
    flex: 8,
  },
});
