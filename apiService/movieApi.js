import axios from "axios";

export const getMovieList = async (offset = 10, limit = 10) => {
  try {
    const { data: movieList } = await axios.get(
        `http://192.168.0.101:3000/api/getMoviesList?offset=${offset}&limit=${limit}`
    );
    return movieList;
  } catch (e) {
    console.log("Error while fetching movie list data", e);
  }
};
