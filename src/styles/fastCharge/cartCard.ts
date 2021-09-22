import styled from "styled-components";

export const CartCardWrapper = styled.div`
  background: #f3f3f3;
  padding: 5px 10px;
  height: 176px;
  width: 95%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  &.delete {
    transition: all 2s;
    transition-timing-function:ease-in-out;
    opacity: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }
`;

export const CartCardImage = styled.img`
  width: 66px;
  height: 100px;
`;

export const CartCardInfoContainer = styled.div`
  height: 100px;
  width: 160px;
  display: flex;
  flex-direction: column;
  margin: 8px 8px 8px 20px;
  justify-content: space-between;
`;

export const CartCardInfoName = styled.div`
  height: 56px;
  width: 100%;
`;

export const CartCardInfoQuantityRarityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartCardInfoQuantityRarity = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  width: 54px;
`;

export const CardInfoTitle = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const CardInfoDescription = styled.p`
  margin: 0;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CartDeleteContainer = styled.div`
  background: #ff5656;
  border-radius: 7.5px;
  width: 32px;
  height: 32px;
  margin-left: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CartDeleteImage = styled.img`
    height: 20px;
    width: 18px;
`;
