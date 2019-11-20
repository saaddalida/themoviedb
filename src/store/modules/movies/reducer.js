import produce from 'immer';

const INITIAL_STATE = {
  movies: null,
  loading: false,
};

export default function movies(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@movies/SEARCH_MOVIES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@movies/SEARCH_MOVIES_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@movies/SEARCH_MOVIES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
