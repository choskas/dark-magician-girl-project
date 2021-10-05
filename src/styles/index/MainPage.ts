import styled from 'styled-components';

interface MainImageProps {
    background: string;
}

// DESK ONLY STYLES

export const MainWrapperDesktop = styled.div`
    display: none;
    // desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
`;

export const DarkMagician = styled.div`
    display: none;
    // desktop
    @media screen and (min-width: 1000px) {
        display: block;
        background: radial-gradient(50% 50% at 50% 48.99%, rgba(0, 0, 0, 0) 5.73%, rgba(3, 41, 96, 0.5) 100%), url(/assets/DarkMagician.png);
        width: 54%;
        background-size: cover;
    }
`;

export const CardFrameVertical = styled.div`
    background: radial-gradient(50% 50% at 50% 50%, #FCEF9E 0%, #C0862A 100%);
    width: 20px;
    height: 100%;
`;

export const MainImageDesktop = styled.div`
    background: ${({background}: MainImageProps) => background};
    background-size: cover;
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const MainTitleDesktop = styled.p`
    font-family: "Dharma-Regular";
    font-size: 240px;
    margin: 0;
`;

export const SubtitleDesktop = styled.p`
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 32px 35px 32px 35px;
`;

export const StartButtonDesktop = styled.button`
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    font-size: 24px;
    text-align: center;
    border-radius: 8px;
    background: radial-gradient(50% 50% at 50% 50%, #8C2163 0%, #C370A2 100%);
    color: #fff;
    border: none;
    width: 341px;
    height: 48px;
    &:hover{
        background: radial-gradient(50% 50% at 50% 50%, #2295D0 0%, #154387 100%);
    }
    &:focus{
        background: radial-gradient(50% 50% at 50% 50%, #2295D0 0%, #154387 100%);
    }
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MainImage = styled.div`
    background: ${({background}: MainImageProps) => background};
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    // desktop
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const CardFrame = styled.div`
    background: radial-gradient(50% 50% at 50% 50%, #FCEF9E 0%, #C0862A 100%);
    width: 100%;
    height: 20px;
`;

export const MainTitle = styled.p`
    font-family: "Dharma-Regular";
    font-size: 132px;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 32px 35px 32px 35px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;

export const StartButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-align: center;
    border-radius: 8px;
    background: radial-gradient(50% 50% at 50% 50%, #8C2163 0%, #C370A2 100%);
    color: #fff;
    border: none;
    width: 341px;
    height: 48px;
    cursor: pointer;
    &:focus{
        background: radial-gradient(50% 50% at 50% 50%, #2295D0 0%, #154387 100%);
    }
`;

export const DarkMagicianGirl = styled.img`
    position: absolute;
    margin: 300px 0 0 70px;
    // small smartphones
    @media screen and (max-width: 376px) {
        margin: 335px 0 0 74px;
        width: 200px;
    }
    // large smartphones
    @media screen and (min-height: 730px) {
        margin: 335px 0 0 82px;
        width: 200px;
    }
`;

export const SectionTwoImage = styled.div`
    padding: 0px 0px 0px 20px;
    background: ${({background}: MainImageProps) => `url(${background}) no-repeat;`};
    background-size: cover;
    height: 350px;
    display: flex;
    flex-direction: column;
    color: #fff;
    // desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 60vh;
        background: linear-gradient(rgba(195,112,162,0.9), rgba(195,112,162,0.9)), url(/assets/Egypt.png);
    }
    
`;

export const TitleDotWrapper = styled.div`
    // desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        width: 400px;
    }
`;

export const TitleDotContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // desktop
    @media screen and (min-width: 1000px) {
        justify-content: center;
    }
`;

interface DotTitleProps {
    fontSize?: string;
}

export const Dot = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background: radial-gradient(50% 50% at 50% 50%, #F3DF8C 0%, #C0862A 100%);
    // desktop
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const DotTitle = styled.p`
    font-family: "Dharma-Regular";
    font-size: ${({fontSize = '64px'}: DotTitleProps) => fontSize};
    margin: 16px 0 0 0;
    // desktop
    @media screen and (min-width: 1000px) {
        text-align: center;
        font-size: 120px;
    }
`;

interface DotSubtitleProps {
    width?: string;
}

export const DotSubtitle = styled.p`
    width: ${({width = '60%'}: DotSubtitleProps) => width};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin: 0 0 0 10px;
    // desktop
    @media screen and (min-width: 1000px) {
        text-align: center;
        font-size: 24px;
        width: 90%;
    }
`;

export const MarkWord = styled.span`
    font-family: "Dharma-Regular";
    font-size: ${({fontSize = '32px'}: DotTitleProps) => fontSize};
    margin: 0;
    // desktop
    @media screen and (min-width: 1000px) {
        font-size: 50px;
    }
`;

export const DonateSectionImage = styled.div`
    padding: 30px 10px 30px 0;
    background: ${({background}: MainImageProps) => `url(${background}) no-repeat;`};
    height: 365px;
    display: flex;
    flex-direction: column;
    color: #fff;
    // Desktop
    @media screen and (min-width: 1000px) {
        height: 60vh;
        background: linear-gradient(rgba(48,59,123,0.8), rgba(48,59,123,0.8)), url(/assets/Magician-girl-feature.png);
        background-size: cover;
    }
`;

export const DonateImageText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const AnotherDarkMagician = styled.img`
    height: auto;
    width: auto;
    // Desktop
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const AnotherDarkMagicianDesk = styled.img`
    display: none;
    // Desktop
    @media screen and (min-width: 1000px) {
        display: block;
    }
`;

export const DonationTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: -10px;
    // small smartphones
    @media screen and (max-width: 410px) {
        margin-left: -50px;
    }
    // Desktop
    @media screen and (min-width: 1000px) {
        width: 40%;
        margin-right: 40px;
    }
`;

export const DonationTitle = styled.p`
    font-family: "Dharma-Regular";
    font-size: 64px;
    text-align: right;
    margin: 0 0 0 0;
    // Desktop
    @media screen and (min-width: 1000px) {
        font-size: 128px;
    }
`;

export const DonationDescription = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    margin: 10px 0 10px 0;
    text-align: right;
    // Desktop
    @media screen and (min-width: 1000px) {
        font-size: 24px;
    }
`;

export const DonateButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-align: center;
    border-radius: 8px;
    background: radial-gradient(50% 50% at 50% 50%, #8C2163 0%, #C370A2 100%);
    color: #fff;
    border: none;
    width: 220px;
    height: 48px;
    cursor: pointer;
    &:focus{
        background: radial-gradient(50% 50% at 50% 50%, #2295D0 0%, #154387 100%);
    }
    &:hover{
        background: radial-gradient(50% 50% at 50% 50%, #2295D0 0%, #154387 100%);
    }
    // Desktop
        @media screen and (min-width: 1000px) {
        width: 380px;
        margin-left: auto;
    }
`;
