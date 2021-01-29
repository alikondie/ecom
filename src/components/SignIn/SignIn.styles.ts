import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 80vw;
    margin-bottom: 20px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0px;
`;

export const SignInButtons = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px;
  }
`;
