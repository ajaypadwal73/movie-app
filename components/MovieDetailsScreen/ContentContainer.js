import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
function ContentContainer({
  photoUrl,
  movie = "Movie Name",
  duration = 120,
  ratings = 9,
}) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: photoUrl}}
          style={styles.image}
        />
      </View>

      <View style={styles.movieDuratingRatingFavoritesContainer}>
        <View style={styles.movieDurationContainer}>
          <View>
            <Text style={styles.movie}>{movie}</Text>
          </View>
          <View>
            <Text style={styles.duration}>{duration} mins</Text>
          </View>
        </View>

        <View style={styles.ratingsContainer}>
          <Text style={styles.ratingsText}>{ratings}/10</Text>
        </View>
        <View style={styles.addToFavContainer}>
          <View style={styles.addToFavButton}>
            <Pressable title="Add to favorites">
              <Text style={styles.addToFavText}>Add to favorites</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ContentContainer;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1.7,
    margin: 24,
    flexDirection: "row",
  },
  imageContainer: {
    width: "37%",
    height: 205,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  movieDuratingRatingFavoritesContainer: {
    flex: 1,
    marginLeft: 18,
  },
  movieDurationContainer: {
    flex: 1,
  },
  movie: {
    fontSize: 16,
  },
  duration: {
    fontSize: 13,
    fontStyle: "italic",
  },
  ratingsContainer: {
    flex: 1,
  },
  ratingsText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  addToFavContainer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  addToFavButton: {
    backgroundColor: "#77716f",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addToFavText: {
    color: "white",
  },
});
