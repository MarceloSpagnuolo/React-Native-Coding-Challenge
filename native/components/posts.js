import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "./postcard";
import { wait } from "../utils/functions";
import { GetNews, GetPopular, GetTop, GetHot } from "../store/action";

export const Posts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  const [refreshing, setRefreshing] = useState(false);
  const { active } = useSelector((state) => state);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    if (active === "new") {
      dispatch(GetNews());
    } else if (active === "popular") {
      dispatch(GetPopular());
    } else if (active === "top") {
      dispatch(GetTop());
    } else {
      dispatch(GetHot());
    }
  });

  return (
    <View style={styles.body}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {!!posts &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("Post", {
                  url: post.data.url,
                  title: post.data.title,
                })
              }
            >
              <PostCard
                key={index}
                image={post.data.thumbnail}
                created={post.data.created}
                title={post.data.title}
                autor={post.data.name}
                score={post.data.score}
                comment={post.data.num_comments}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
