import styled from "styled-components";

export const UniqueCardPriceWrapper = styled.div`
  padding: 20px 20px;
`;

export const InputTextWrapper = styled.div`
  width: 100%;
  // Desktop
  @media screen and (min-width: 1000px) {
    width: 400px;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
    font-size: 16px;
    text-align: justify;
        // Desktop
        @media screen and (min-width: 1000px) {
        font-size: 20px;
    }
`;

export const TextBold = styled.p`
    font-size: 16px;
    text-align: justify;
    font-weight: bolder;
        // Desktop
        @media screen and (min-width: 1000px) {
        font-size: 20px;
    }
`;
