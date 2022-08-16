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
  trailerContentContainer: {
    flex: 2,
    marginHorizontal: 24,
  },
  trailerTitleContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#Ada8a8",
  },
  trailerTitleText: {
    fontSize: 15,
  },
  trailersButtonContainer: {
    flex: 1,
  },
  trailerButton: {
    backgroundColor: "#E8e4e4",
    marginVertical: 15,
    height: 45,
  },
  trailerButtonContent: {
    flexDirection: "row",
    marginLeft: 12,
    alignItems: 'center',
    marginVertical: 6
  }
});
