import styled from 'styled-components';

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    width: 80vw;
    margin-bottom: 20px;
  }
`;

export const SignupTitle = styled.h2`
  margin: 10px 0;
`;
