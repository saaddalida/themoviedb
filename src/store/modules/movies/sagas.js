import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { searchMoviesSuccess, searchMoviesFailure } from './actions';

export function* SearchMovies({ payload }) {
  try {
    const { query } = payload;

    const response = yield call(api.get, '/search/movie', {
      params: { query },
    });

    yield put(searchMoviesSuccess(response.data));
  } catch (e) {
    yield put(searchMoviesFailure());
  }
}

export default all([takeLatest('@movies/SEARCH_MOVIES_REQUEST', SearchMovies)]);
