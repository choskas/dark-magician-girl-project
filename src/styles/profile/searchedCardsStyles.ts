import styled from "styled-components";

export const CardsWrapper = styled.div`
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
  height: auto;
  margin: 5px 20px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 150px;
    margin: 20px 40px;
    width: 92%;
  }
`;

export const SearchedCardContainer = styled.div`
  height: 70%;
  width: 15%;
  margin: 4% 2%;
  border: 1px solid #ef5da8;
  display: flex;
  flex-direction: column;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 100px;
    margin: 20px 20px;
    width: 75px;
  }
`;

export const SearchedCardImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const SearchedIcon = styled.img`
  position: absolute;
  width: 10px;
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 20px;
  }
`;

export const ModalText = styled.p`
    font-size: 16px;
    text-align: center;
    color: #fff;
`;

export const ModalFoundByContainer = styled.div`
  height: 100px;
  width: 100%;
  overflow-y: auto;
`;

export const ModalFoundByTitle = styled.p`
  margin: 5px 0;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;

export const ModalFoundBy = styled.p`
  color: #ef5da8;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  margin: 2px 0;
`;
