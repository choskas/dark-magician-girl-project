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
`;

export const FooterTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 5px 18%;
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
