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
    font-size: 22px;
    font-family: 'Abel', sans-serif;

    border: none;
    border-radius: 30px;
    padding-left: 30px;

    ::placeholder {
      color: #84aac2;
    }
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 70px auto;

  span {
    margin-top: 25px;
    font-size: 50px;
    font-family: 'Abel', sans-serif;
    color: #116193;
  }
`;
