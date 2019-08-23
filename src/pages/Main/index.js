import React from 'react';

import { Container, GithubSearch, Form, SubmitButton } from './styles';
import SearchIcon from '../../assets/images/search-icon.svg';

export default function Main() {
  return (
    <Container>
      <GithubSearch>
        <strong>Github</strong>
        <span>Search</span>
      </GithubSearch>

      <Form>
        <input type="text" />

        <SubmitButton>
          <img src={SearchIcon} alt="search" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
