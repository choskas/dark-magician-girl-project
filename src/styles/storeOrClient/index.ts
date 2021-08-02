import styled from "styled-components";

export const StoreOrClientWrapper = styled.div`
  // Desktop
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const ClientWrapper = styled.div`
  background: radial-gradient(
      50% 50% at 50% 48.99%,
      rgba(0, 0, 0, 0) 5.73%,
      rgba(3, 41, 96, 0.5) 100%
    ),
    url(/assets/darkMagicianChoco.jpeg);
  height: 494;
  width: 100%;
  height: 50vh;
  background-position: center;
  display: flex;
  align-items: end;
  justify-content: end;
  // Desktop
  @media screen and (min-width: 1000px) {
    background-repeat: no-repeat;
    background-position: center;
    height: 65vh;
    justify-content: start;
  }
`;

export const StoreWrapper = styled.div`
  background: radial-gradient(
      50% 50% at 50% 48.99%,
      rgba(0, 0, 0, 0) 5.73%,
      rgba(3, 41, 96, 0.5) 100%
    ),
    url(/assets/darkMagiciansTo.jpeg);
  height: 494;
  width: 100%;
  height: 50vh;
  background-position: top;
  display: flex;
  align-items: end;
  justify-content: start;
  // Desktop
  @media screen and (min-width: 1000px) {
    background-repeat: no-repeat;
    background-position: center;
    height: 65vh;
    align-items: flex-end;
    justify-content: end;
  }
`;

export const CardFrameStoreOrClient = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #fcef9e 0%, #c0862a 100%);
  width: 100%;
  height: 20px;
  // Desktop
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
