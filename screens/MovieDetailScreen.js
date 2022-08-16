import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/MovieDetailsScreen/Title";
import ContentContainer from "../components/MovieDetailsScreen/ContentContainer";
import StoryOulineContainer from "../components/MovieDetailsScreen/StoryOulineContainer";
import TrailerSection from "../components/MovieDetailsScreen/TrailerSection";

function MovieDetailScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title />

      <ContentContainer />

      <StoryOulineContainer />

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
