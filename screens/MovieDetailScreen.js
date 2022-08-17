import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/MovieDetailsScreen/Title";
import ContentContainer from "../components/MovieDetailsScreen/ContentContainer";
import StoryOulineContainer from "../components/MovieDetailsScreen/StoryOulineContainer";
import TrailerSection from "../components/MovieDetailsScreen/TrailerSection";
import { useRoute } from "@react-navigation/native";

function MovieDetailScreen() {
  const route = useRoute();
  const { title, photoUrl, rating, storyOutline, trailerUrl } = route.params;
  return (
    <View style={styles.rootContainer}>
      <Title title={title}/>

      <ContentContainer photoUrl={photoUrl} movie={title} ratings={rating}  />

      <StoryOulineContainer storyOutline={storyOutline}/>

      <TrailerSection />
    </View>
  );
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
