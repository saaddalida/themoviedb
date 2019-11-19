import React from 'react';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <input
        name="search"
        type="text"
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </Container>
  );
}
