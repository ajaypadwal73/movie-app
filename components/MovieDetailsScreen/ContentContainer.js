import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
function ContentContainer({
  movie = "Movie Name",
  duration = 120,
  ratings = 9,
}) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/1.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.movieDurationRatingsContainer}>
        <View>
          <View>
            <Text style={styles.movie}>{movie}</Text>
          </View>

          <View>
            <Text style={styles.duration}>{duration} mins</Text>
          </View>

          <View style={styles.ratingsContainer}>
            <Text style={styles.ratings}>{ratings}/10</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable title="Add to favorites">
              <Text style={styles.buttonText}>Add to favorites</Text>
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
    flex: 0.5,
    margin: 24,
    flexDirection: "row",
  },
  imageContainer: {
    width: "35%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  movieDurationRatingsContainer: {
    flex: 1,
    marginLeft: 18,
  },
  movie: {
    fontSize: 16,
  },
  duration: {
    fontSize: 13,
    fontStyle: "italic",
  },
  ratingsContainer: {
    marginTop: 60,
  },
  ratings: {
    fontSize: 13,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 28,
    height: 55,
    backgroundColor: "#77716f",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
