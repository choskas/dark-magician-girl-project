import styled from "styled-components";

export const OnSaleWrapper = styled.div`
  padding: 10px;
  border: 2px solid #ef5da8;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // Desktop
  @media screen and (min-width: 1000px) {
    height: 700px;
    overflow-y: auto;
  }
`;

export const OnSaleCardWrapper = styled.div`
  width: 100px;
  height: 200px;
  border: 1px solid #ef5da8;
  margin: 10px 10px 0 10px;
  // Desktop
  @media screen and (min-width: 1000px) {
    margin: 20px 10px 0 10px;
    width: 175px;
    height: 350px;
  }
`;

export const OnSaleCardImage = styled.img`
  height: 70%;
  width: 100%;
`;

export const OnSaleTextWrapper = styled.div`
  overflow-y: auto;
  height: 25%;
`;

export const OnSaleCardSubtitle = styled.span`
  font-size: 14px;
  font-weight: bolder;
  color: #ef5da8;
`;

export const OnSaleCardText = styled.p`
  font-size: 12px;
  margin: 3px 0 0 0;
`;

export const OnSaleGoToText = styled.p`
  font-size: 16px;
  margin: 2px 0 0 0;
  font-weight: bolder;
  color: #ef5da8;
  text-align: center;
  cursor: pointer;
`;
