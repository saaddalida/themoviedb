import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdMovieFilter } from 'react-icons/md';

import { searchMoviesRequest } from '../../store/modules/movies/actions';
import { Container, LoadingContent } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.movies.loading);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadMovies() {
      if (query !== '') {
        dispatch(searchMoviesRequest(query));
      }
    }

    loadMovies();
  }, [dispatch, query]);

  function handlePress(e) {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
    }
  }

  return (
    <Container>
      <input
        name="query"
        type="text"
        placeholder="Busque um filme por nome, ano ou gênero..."
        onKeyPress={handlePress}
      />

      {loading && (
        <LoadingContent>
          <MdMovieFilter size={50} color="#116193" />
          <span>Carregando...</span>
        </LoadingContent>
      )}
    </Container>
  );
}
