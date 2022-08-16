import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import ImageContainer from "../components/MovieListScreen/ImageContainer";

function MovieListScreen() {
  const imageFlatListRenderer = (itemData) => {
    return <ImageContainer />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => item}
        renderItem={imageFlatListRenderer}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default MovieListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    width: "50%",
    height: 275,
  },
  button: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
