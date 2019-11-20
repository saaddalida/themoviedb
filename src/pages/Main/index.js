import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { searchMovieRequest } from '../../store/modules/movie/actions';
import { Container } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadMovies() {
      if (query !== '') {
        dispatch(searchMovieRequest(query));
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
    </Container>
  );
}
