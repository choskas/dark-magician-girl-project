import styled from "styled-components";

export const CardInfoWrapper = styled.div`
  padding: 20px 0px;
`;

export const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  height: 300px;
  width: 215px;
`;

export const CardDescriptionWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  border: 1px solid #ef5da8;
  margin: 10px 0;
  color: ${({color}) => color ? color : 'black'}
`;

export const CardName = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-weight: bold;
`;

export const CardAtkDefWrapper = styled.div`
  border: 1px solid #ef5da8;
  display: flex;
  padding: 5px 10px;
`;

export const CardAtk = styled.div`
  width: 50%;
  border-right: 1px solid #ef5da8;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardIcon = styled.img`
  width: 15px;
  background: white;
`;

export const CardDef = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardArchetype = styled.div`
  padding: 5px 10px;
`;

export const CardDescription = styled.div`
  border-top: 1px solid #ef5da8;
  padding: 5px 10px;
`;

export const AlternativeImagesTitle = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
`;

export const AlternativeImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
`;

export const AlternativeImages = styled.img`
  margin: 10px 10px 0 0;
  width: 100px;
`;

export const SetWrapper = styled.div`
  border: 1px solid #ef5da8;
  font-family: "Montserrat", sans-serif;
`;

export const SetName = styled.div`
  border-bottom: 1px solid #ef5da8;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #ef5da8;
  padding: 5px 0;
`;

export const SetCodePriceWrapper = styled.div`
  display: flex;
  padding: 5px 0;
`;

export const SetCode = styled.div`
  border-right: 1px solid #ef5da8;
  width: 50%;
`;

export const SetPrice = styled.div`
  width: 50%;
  text-align: right;
`;
