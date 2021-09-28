import styled from "styled-components";

export const CardInfoWrapper = styled.div`
  padding: 20px 0px;
`;

interface CardImageAndButtonWrapperProps {
  cardInfo: any;
}

export const CardImageAndButtonWrapper = styled.div<CardImageAndButtonWrapperProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // Desktop
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: ${({cardInfo}) => cardInfo ? 'space-between' : 'center'};
  }
`;

export const CardImageWrapper = styled.div<CardImageAndButtonWrapperProps>`
  display: flex;
  justify-content: center;
  // Desktop
  @media screen and (min-width: 1000px) {
    width: ${({cardInfo}) => cardInfo ? '500px' : '100%'};
  }
`;

export const CardImage = styled.img`
  height: 300px;
  width: 215px;
`;

export const DescritpionAndButtonWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CardDescriptionWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  border: 1px solid #ef5da8;
  margin: 16px 0;
  color: ${({ color }) => (color ? color : "black")};
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 500px;
    height: 300px;
    font-size: 20px;
    border: 3px solid #ef5da8;
  }
`;

export const IWantItButtonWrapper = styled.div`
  width: 340px;
  display: flex;
  justify-content: center;
  margin: 16px 0 16px 0;
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 300px;
  }
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
  // Desktop
  @media screen and (min-width: 1000px) {
    border: 3px solid #ef5da8;
  }
`;

export const CardAtk = styled.div`
  width: 50%;
  border-right: 1px solid #ef5da8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // Desktop
  @media screen and (min-width: 1000px) {
    border-right: 3px solid #ef5da8;
  }
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
  overflow-y: auto;
  height: 100px;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    border-top: 3px solid #ef5da8;
    height: 160px;
    overflow-y: auto;
  }
`;

export const AlternativeImagesTitle = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 28px;
  }
`;

export const AlternativeImagesWrapperAndTitleWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 500px;
  }
`;

export const AlternativeImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 260px;
    overflow-y: auto;
  }
`;

export const AlternativeImages = styled.img`
  margin: 10px 10px 0 0;
  width: 100px;
`;

export const SetsTitle = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  // Desktop
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const SetsContainer = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 16px 0;
  }
`;

export const SetWrapper = styled.div`
  border: 1px solid #ef5da8;
  font-family: "Montserrat", sans-serif;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 300px;
    border: 3px solid #ef5da8;
    overflow-y: auto;
  }
`;

export const SetName = styled.div`
  border-bottom: 1px solid #ef5da8;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #ef5da8;
  padding: 5px 0;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    border-bottom: 3px solid #ef5da8;
    font-weight: bolder;
  }
`;

export const SetCodePriceWrapper = styled.div`
  display: flex;
  padding: 5px 0;
`;

export const SetCode = styled.div`
  border-right: 1px solid #ef5da8;
  width: 50%;
  // Desktop
  @media screen and (min-width: 1000px) {
    border-right: 3px solid #ef5da8;
  }
`;

export const SetPrice = styled.div`
  width: 50%;
  text-align: right;
`;

export const DrawerText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  padding: 20px 0 0 0;
`;

export const SelectContainer = styled.div`
  width: 70%;
`;

export const InputContainer = styled.div`
  width: 70%;
  margin: 5px 0 20px 0;
`;

export const ButtonDrawerContainer = styled.div`
  width: 300px;
  display: flex;

  margin: 5px 0 20px 0px;
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 300px;
  }
`;

export const DrawerImagesContainer = styled.div`
  width: 90%;
  height: 70px;
  overflow-x: auto;
`;

interface DrawerImageProps {
  isActive: boolean;
}

export const DrawerImage = styled.img<DrawerImageProps>`
  height: 50px;
  ;
  margin: 0 5px;
  &:hover {
    zoom: 1.1;
  }
  border: ${({ isActive }) => (isActive ? "2px solid #ef5da8" : "none")};
`;

export const FindThisBaseButtonContainer = styled.div`
  width: 315px;
  display: flex;
  margin: 5px 0;
`;

export const FoundBaseText = styled.p`
  margin: 5px 0;
  font-size: 12px;
  padding: 0 10px;
  text-align: justify;
`;

export const StoresDrawerText = styled.p`
  margin: 2px 0;
  font-size: 16px;
  color: #ef5da8;
`;

export const StoresDrawerLink = styled.a`
  font-size: 16px;
  color: #ef5da8;
  text-decoration: underline;
  cursor: pointer;
`;

export const MyDeckSectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;