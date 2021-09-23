import styled from 'styled-components';

export const StoreProfileInfoContainer = styled.div`
    border: 2px solid #ef5da8;
    margin: 10px 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    width: 93%;
`;

export const ProfileImageContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const ProfileImage = styled.img`
    width: 200px;
    max-height: 240px;
    margin-top: 10px;
    max-width: 320px;
    margin-bottom: 10px;
`;

export const ProfileTitle = styled.p`
    margin: 16px 0;
    font-size: 20px;
    text-align: center;
`;

export const ProfileBold = styled.span`
    font-size: 22px;
    font-weight: bolder;
`;

export const MainInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin-bottom: 10px;
`;

export const MainInfoTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0;

`;

export const MainInfoSubtitle = styled.p`
font-size: 16px;
    margin: 0;
    text-align: center;
`;

export const StoreMainInfoSocialContainer = styled.div`
    margin: 10px 10px;
    width: 285px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    background: #ef5da8;
    width: 87%;
`;

export const StoreMainInfoSocialLink = styled.a`    
`;

export const StoreMainInfoSocialImage = styled.img`
    width: 25px;
    cursor: pointer;
`;


export const StoreMainInfoUniqueCardsContainer = styled.div`
    margin: 10px 10px;
    border: 2px solid #ef5da8;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    width: 285px;
    padding: 10px;
    width: 87%;
`;

export const StoreMainInfoUniqueCardsContainerModal = styled.div`
    margin: 10px 10px;
    border: 2px solid #ef5da8;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    height: 50vh;
    padding: 10px;
    width: 87%;
    overflow-y: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const StoreMainInfoCardImage = styled.img`
    width: 75px;
    height: 100px;
    margin: 10px;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
        width: 80px;
        height: 120px;
    }
`;

export const StoreMainInfoRarityCode = styled.p`
    font-size: 18px;
    color: #ef5da8;
    margin: 0 0 0 0;
`;

export const StoreMainInfoImageAndCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StoreMainInfoModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    align-items: center;
`;

export const StoreMainInfoModalImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const StoreMainInfoModalImage = styled.img`
    width: 200px;
    height: 300px;
`;

export const StoreMainInfoModalCardName = styled.p`
    margin: 16px 0;
    font-size: 20px;
`;

export const StoreMainInfoModalCardRarity = styled.p`
    margin: 16px 0;
    font-size: 16px;
`;