import styled from 'styled-components';

interface FooterProps {
    background?: string;
}

export const FooterStyle = styled.div`
    padding: 30px 10px 30px 0;
    background: ${({background}: FooterProps) => `url(${background}) no-repeat;`};
    height: 214px;
    display: flex;
    flex-direction: column;
    color: #fff;
    // Desktop
        @media screen and (min-width: 1000px) {
        background: rgba(195,112,162,0.9);
    }
`;

export const WitchcraftTextWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

export const WitchcraftImage = styled.img`
    // small smartphones
    @media screen and (max-width: 410px) {
        margin-left: -50px;
    }
    // Desktop
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const WitchcraftImageDesk = styled.img`
    display: none;
    // Desktop
    @media screen and (min-width: 1000px) {
        display: block;
        margin: auto 0 0 auto;
        width: 430px;
    }
`;

export const FooterTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px 18%;
    padding-top: 120px;
`;

export const FooterIconWrapper = styled.div`
    display: none;
    // Desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        width: 200px;
        justify-content: space-between;
    }
`;

export const FooterIcon = styled.img`
    display: none;
    // Desktop
    @media screen and (min-width: 1000px) {
        display: block;
        width: 56px;
        height: 56px;
    }
`;

export const FooterTitle = styled.p`
    font-family: "Dharma-Regular";
    font-size: 56px;
    margin: 0 0 5px 0;
    text-align: center;
`;

export const FooterSubtitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    text-align: center;
`;

export const FooterPrivacyLink = styled.p`
    font-size: 10px;
    margin: 0;
`;
