import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200i&display=swap');

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 415px;
    height: 81px;
    display: flex;
    justify-content: space-between;
  }

  strong {
    font-family: monospace;
    font-size: 60px;
  }

  span {
    font-family: Raleway;
    font-size: 60px;
  }
`;

export const Form = styled.form`
  display: flex;
  input {
    width: 650px;
    height: 50px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
    padding: 10px;
    border: 0;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  border: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #ac53f2;
`;
