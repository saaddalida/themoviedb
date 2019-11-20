// import produce from 'immer';

const INITIAL_STATE = {
  movie_id: null,
  loading: false,
};

export default function movie(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case '@movie/SEARCH_MOVIE_SUCCESS':
    //   return produce(state, draft => {});
    default:
      return state;
  }
}
