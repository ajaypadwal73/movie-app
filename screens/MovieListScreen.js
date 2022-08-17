import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import ImageContainer from "../components/MovieListScreen/ImageContainer";
import { getMovieList } from '../apiService/movieApi'


function MovieListScreen() {
  const [movieList, setMovieList] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  const makeGetMovieListApiCall = async() => {
    movieListData = await getMovieList(currentOffset, 10);
    setCurrentOffset(currentOffset+10);
    setMovieList((previousMovieList) => {
      return [...previousMovieList, ...movieListData];
    });
    console.log(movieList.length);
  }
  
  useEffect(() => {
    let movieListData;
    const makeGetMovieListApiCall = async() => {
      movieListData = await getMovieList(currentOffset, 10);
      setCurrentOffset(currentOffset+10);
      setMovieList((previousMovieList) => {
        return [...previousMovieList, ...movieListData];
      });
      
    }
    makeGetMovieListApiCall();
  }, []);
  const imageFlatListRenderer = (itemData) => {
    return <ImageContainer movieDetails={itemData.item}/>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movieList}
        keyExtractor={(item) => item._id}
        renderItem={imageFlatListRenderer}
        numColumns={2}
        onEndReached={makeGetMovieListApiCall}
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
