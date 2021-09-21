import styled from "styled-components";

export const SearchDeckWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    padding: 50px 30px 50px 30px;
    height: auto;
  }
  padding: 20px;
`;

export const Title = styled.p`
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 130px;
  }
  font-family: "Dharma-Regular";
  font-size: 96px;
  color: #ef5da8;
  margin: 16px 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    margin: 40px 0;
  }
  font-family: "Montserrat", sans-serif;
  margin: 16px 0;
`;

export const SwitchDiv = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    justify-content: flex-end;
    margin: 32px 0;
  }
  display: flex;
  justify-content: flex-end;
  margin: 32px 0;
`;

export const SearchBothInputWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 65vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75px;
  margin: 20px 0 48px 0;
`;

export const SearchInputWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 500px;
  }
`;

export const SearchArchetypeWrapper = styled.div`
  margin-top: 30px;
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 500px;
  }
`;

export const SearchAndMyDeckWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    margin: 16px 0 0 0;
    display: flex;
  }
`;

export const AllCardsWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 65vw;
    height: 400px;
    overflow-y: auto;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MyDeck = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 65vw;
    height: 400px;
    overflow-y: auto;
  }
`;

export const MyDeckWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 30vw;
    height: 400px;
    overflow-y: auto;
    margin: 0;
    margin-top: 0;
  }
  font-family: "Montserrat", sans-serif;
  height: 400px;
  overflow-y: auto;
  margin: 40px 0 0 0;
`;

export const DeckWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  font-family: "Montserrat", sans-serif;
  margin: 40px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: center;
`;

export const MyDeckPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  color: #f178b6;
  font-size: 28px;
  margin: 0;
`;

export const SaveDeckInputs = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ButtonsWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SmallText = styled.small`
  font-family: "Montserrat", sans-serif;
  color: #ef5da8;
  font-size: 12px;
`;
