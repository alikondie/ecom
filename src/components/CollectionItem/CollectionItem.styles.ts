import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
  width: 10%;
`;

export const CollectionItemButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  z-index: 1;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    top: 120px;
    min-width: unset;
    padding: 0 10px 0 10px;
  }
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${CollectionItemImage} {
      opacity: 0.8;
    }
    ${CollectionItemButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    width: 40vw;

    &:hover {
      ${CollectionItemImage} {
        opacity: unset;
      }
      ${CollectionItemButton} {
        opacity: unset;
      }
    }
  }
`;
