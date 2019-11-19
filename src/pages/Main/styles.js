import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');

  max-width: 1100px;
  display: flex;
  flex-direction: column;

  margin: 50px auto;
  padding: 0 40px;

  input {
    height: 50px;
    flex-grow: 1;
    background: #ebebeb;
    color: #84aac2;
    font-size: 20px;
    font-family: 'Abel', sans-serif;

    border: none;
    border-radius: 30px;
    padding-left: 30px;

    ::placeholder {
      color: #84aac2;
    }
  }
`;
