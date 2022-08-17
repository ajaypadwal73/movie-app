import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/MovieDetailsScreen/Title";
import ContentContainer from "../components/MovieDetailsScreen/ContentContainer";
import StoryOulineContainer from "../components/MovieDetailsScreen/StoryOulineContainer";
import TrailerSection from "../components/MovieDetailsScreen/TrailerSection";
import { useRoute } from "@react-navigation/native";

function MovieDetailScreen() {
  const route = useRoute();
  const { title, photoUrl, duration, rating, storyOutline, trailers } = route.params;
  return (
    <View style={styles.rootContainer}>
      <Title title={title}/>

      <ContentContainer photoUrl={photoUrl} movie={title} ratings={rating} duration={duration} />

      <StoryOulineContainer storyOutline={storyOutline}/>

      <TrailerSection trailers={trailers}/>
    </View>
  );
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
