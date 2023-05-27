const API_KEY = 'cb2a12db';

export const searchMovies = async (searchTerm) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
  const data = await response.json();
  return data.Search;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);
  const data = await response.json();
  return data;
};
