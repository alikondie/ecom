import styled, { css } from 'styled-components';

const ChildStyle = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Price = styled.span`
  ${ChildStyle}
`;

export const Name = styled.span`
  ${ChildStyle}
`;

export const Quantity = styled.span`
  ${ChildStyle}
  display: flex;
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
