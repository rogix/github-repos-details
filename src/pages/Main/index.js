import React from 'react';

import { Container, Form, SubmitButton } from './styles';
import SearchIcon from '../../assets/images/search-icon.svg';

export default function Main() {
  return (
    <Container>
      <div>
        <strong>Github</strong>
        <span>Search</span>
      </div>

      <Form>
        <input type="text" />

        <SubmitButton>
          <img src={SearchIcon} alt="search" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
