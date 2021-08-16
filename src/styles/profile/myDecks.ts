import styled from "styled-components";

export const ProfileWrapper = styled.div`
  height: auto;
    border: 2px solid #ef5da8;
    margin: 10px 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    width: 93%;
      // Desktop
  @media screen and (min-width: 1000px) {
    width: 98%;
  }
`;

export const DeckWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  box-sizing: border-box;
  display: block;
  width: 87%;
  border: 3px solid #ef5da8;
  padding-left: 10px;
  color: black;
  background: transparent;
  border-radius: 3px;
  height: 100px;
  margin: 5px 20px;
  display: flex;
  overflow: auto;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 150px;
    margin: 20px 40px;
    width: 92%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: white;
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  margin: 10px 10px;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 24px;
    margin: 15px 15px;
  }
`;

export const DeckPrice = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: white;
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  margin: 10px 10px;
  color: #ef5da8;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 24px;
    margin: 15px 15px;
  }
`;

export const BigTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: white;
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  margin: 10px 10px;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 34px;
    margin: 15px 15px;
  }
`;

export const Card = styled.img`
  display: flex;
  flex-direction: row;
  height: 70%;
  width: 15%;
  margin: 4% 2%;
  cursor: pointer;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 100px;
    margin: 20px 20px;
    width: 75px;
  }
`;

export const NoDecksMessage = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: white;
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  margin: 10px 21%;
  // Desktop
  @media screen and (min-width: 1000px) {
    font-size: 34px;
    margin: 15px 33%;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ModalImage = styled.img`
  height: 300px;
  width: 200px;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 350px;
    width: 250px;
  }
`;
