export function searchMovieRequest(movie) {
  return {
    type: '@movie/SEARCH_MOVIE_REQUEST',
    payload: { movie },
  };
}

export function searchMovieSuccess(data) {
  return {
    type: '@movie/SEARCH_MOVIE_SUCCESS',
    payload: { data },
  };
}

export function searchMovieFailure() {
  return {
    type: '@movie/SEARCH_MOVIE_FAILURE',
  };
}
