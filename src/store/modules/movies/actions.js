export function searchMoviesRequest(query) {
  return {
    type: '@movies/SEARCH_MOVIES_REQUEST',
    payload: { query },
  };
}

export function searchMoviesSuccess(movies) {
  return {
    type: '@movies/SEARCH_MOVIES_SUCCESS',
    payload: { movies },
  };
}

export function searchMoviesFailure() {
  return {
    type: '@movies/SEARCH_MOVIES_FAILURE',
  };
}
