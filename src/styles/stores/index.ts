import styled from "styled-components";

export const StoresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  align-items: center;
`;

export const StoresHeaderWrapper = styled.div`
  background: rgba(235, 233, 234, 0.35);
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  border-radius: 8px;
`;

export const StoresTitle = styled.p`
  font-family: "Dharma-regular";
  font-size: 96px;
  text-align: center;
  margin: 12px 0;
`;

export const StoresSubTitle = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 12px 8px;
`;

export const SearchStoreInputWrapper = styled.div`
  width: 338px;
  margin: 16px auto;
`;

export const StoreCard = styled.div`
  width: 363px;
  height: 349px;    
  border-radius: 8px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  background: #FFFFFF;
  margin: 12px 0;
`;

export const StoreCardImageWrapper = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
`;

export const StoreCardImage = styled.img`
  /* width: 100%;
  height: 70%; */
  max-width: 100%;
  height: 100%;
  min-width: 50%;
`;

export const StoreInfo = styled.div`
  width: 96%;
  height: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const StoreName = styled.p`
  font-size: 20px;
  margin: 0 2px;
`;

export const StoreDescription = styled.p`
  font-size: 16px;
`;

export const StoreSocialIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StoreSocialIcon = styled.img`
    width: 16px;
    height: 16px;
    margin: 4px 8px;
    cursor: pointer;
`;

export const StoreCityIcon = styled.img`
    width: 13px;
    height: 13px;
    margin: 0 4px 0 0;
`;

export const StoreCity = styled.p`
  font-size: 12px;
  width: 100px;
  margin: 8px 0 0 68%;
  display: flex;
  align-items: center;
  height: 40px;
`;
