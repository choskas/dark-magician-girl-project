import styled from 'styled-components';

interface MainImageProps {
    background: string;
}

export const MainImage = styled.div`
    background: ${({background}: MainImageProps) => background};
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
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

export const StartButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    text-align: center;
    border-radius: 8px;
    background: radial-gradient(50% 50% at 50% 50%, #8C2163 0%, #C370A2 100%);
    color: #fff;
    border: none;
    width: 341px;
    height: 48px;
`;

export const DarkMagicianGirl = styled.img`
    position: absolute;
    margin: 300px 0 0 85px;
`;

export const SectionTwoImage = styled.div`
    padding: 30px 30px 30px 30px;
    background: ${({background}: MainImageProps) => `url(${background}) no-repeat;`};
    background-size: contain;
    height: 304px;
    display: flex;
    flex-direction: column;
    color: #fff;
`;

export const TitleDotContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

interface DotTitleProps {
    fontSize?: string;
}

export const Dot = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background: radial-gradient(50% 50% at 50% 50%, #F3DF8C 0%, #C0862A 100%);
`;

export const DotTitle = styled.p`
    font-family: "Dharma-Regular";
    font-size: ${({fontSize = '64px'}: DotTitleProps) => fontSize};
    margin: 10px 0 0 0;
`;

interface DotSubtitleProps {
    width?: string;
}

export const DotSubtitle = styled.p`
    width: ${({width = '60%'}: DotSubtitleProps) => width};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin: 0 0 0 10px;
`;

export const MarkWord = styled.span`
    font-family: "Dharma-Regular";
    font-size: ${({fontSize = '32px'}: DotTitleProps) => fontSize};
    margin: 0;
`;

export const DonateSectionImage = styled.div`
    padding: 30px 30px 30px 30px;
    background: ${({background}: MainImageProps) => `url(${background}) no-repeat;`};
    height: 365px;
    display: flex;
    flex-direction: column;
    color: #fff;
`;