import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function MovieDetailScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/1.jpg")}
            style={styles.image}
          />
        </View>

        <View style={styles.movieDurationRatingsContainer}>
          <View>
            <View>
              <Text style={styles.movie}>Movie Name</Text>
            </View>

            <View>
              <Text style={styles.duration}>120 mins</Text>
            </View>

            <View style={styles.ratingsContainer}>
              <Text style={styles.ratings}>9/10</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable title="Add to favorites">
                <Text style={styles.buttonText}>Add to favorites</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.storyOutlineContainer}>
        <Text numberOfLines={3} style={styles.storyOutlineText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <View style={styles.trailersContaier}>
          <Text style={styles.trailerTitleText}>TRAILERS</Text>
          <View style={styles.trailerContainer}>
            <Pressable android_ripple={{ color: "black" }}>
              <View style={styles.trailerContentContainer}>
                <Ionicons name="play-circle-outline" size={32} />
                <Text>Trailer 1</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.trailerContainer}>
            <Pressable android_ripple={{ color: "black" }}>
              <View style={styles.trailerContentContainer}>
                <Ionicons name="play-circle-outline" size={32} />
                <Text>Trailer 1</Text>
              </View>
            </Pressable>
          </View>
          {/* <Text>Trailer 1</Text> */}
        </View>
      </View>
    </View>
  );
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#8a8381",
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: "white",
    marginVertical: 8,
    marginLeft: 12,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
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
  storyOutlineContainer: {
    flex: 1.8,
    margin: 24,
  },
  storyOutlineText: {
    lineHeight: 25,
    letterSpacing: 0.5,
    color: "#393737",
  },
  trailersContaier: {
    marginTop: 28,
    flex: 1,
  },
  trailerTitleText: {
    fontSize: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#Ada8a8",
  },
  trailerContainer: {
    marginTop: 12,
    backgroundColor: "#E8e4e4",
    height: 50,
    flexDirection: "row",
  },
  trailerContentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12
  },
});
