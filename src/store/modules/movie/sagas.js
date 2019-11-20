import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { searchMovieSuccess, searchMovieFailure } from './actions';

export function* SearchMovie({ payload }) {
  try {
    const { movie } = payload;

    const response = yield call(api.get, '/search/movie', {
      params: { query: movie },
    });

    yield put(searchMovieSuccess(response.data));
  } catch (e) {
    yield put(searchMovieFailure());
  }
}

export default all([takeLatest('@movie/SEARCH_MOVIE_REQUEST', SearchMovie)]);
