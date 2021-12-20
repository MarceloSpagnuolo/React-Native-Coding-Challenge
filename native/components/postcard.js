import React from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";

export const PostCard = (props) => {
  return (
    <View style={styles.body}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.image }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.data}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{Time(props.created)}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.datosContainer}>
          <View style={styles.autorContainer}>
            <Text style={styles.autor}>{props.autor}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>Score: {props.score}</Text>
          </View>
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>{props.comment} comments</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

function Time(created) {
  let result = Math.trunc((Date.now() - created * 1000) / 1000);
  if (result < 60) {
    return "Now";
  } else if (result >= 60 && result <= 3600) {
    result = Math.trunc(result / 60);
    return result + " minutes ago";
  } else if (result > 3600 && result <= 216000) {
    result = Math.trunc(result / 3600);
    return result + " hours ago";
  } else if (result > 216000) {
    result = Math.trunc(result / 216000);
    return result + " days ago";
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
  },
  imageContainer: {
    flex: 1.3,
  },
  image: {
    height: 100,
    width: 100,
  },
  data: {
    flex: 3,
  },
  timeContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  time: {
    fontSize: 10,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1.2,
  },
  title: {
    fontWeight: "bold",
  },
  datosContainer: {
    flex: 1,
    flexDirection: "row",
  },
  autorContainer: {
    flex: 1,
    alignItems: "center",
  },
  autor: {
    fontSize: 10,
  },
  scoreContainer: {
    flex: 1,
    alignItems: "center",
  },
  score: {
    fontSize: 10,
  },
  commentContainer: {
    flex: 1,
    alignItems: "center",
  },
  comment: {
    fontSize: 10,
  },
});
