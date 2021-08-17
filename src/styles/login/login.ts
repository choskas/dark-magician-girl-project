import styled from 'styled-components';

export const LoginImage = styled.div`
    width: 100%;
    height: 29vh;
    background-repeat: no-repeat;
    background-image: url(/assets/MagicianGirlLogin.png);
    // Desktop
        @media screen and (min-width: 1000px) {
        height: 500px;
        width: 50%;
        background-image: url(/assets/darkMagicianGirlLoader2.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 10vw 0;
    }
`;

export const LoginImageContainer = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        justify-content: center;
        height: 80%;
        width: 50%;
    }
`;

export const LoginFormContainer = styled.div``;

export const LoginWrapper = styled.div`
      // Desktop
      @media screen and (min-width: 1000px) {
        display: flex;
    }  
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    margin: 0px 0;
`;

export const TitleLogin = styled.img`
    margin: 5px 0;
    width: 190px;
`;

export const SubtitleLogin = styled.p`
    margin: 5px 0;
    font-size: 16px ;
    font-family: 'Montserrat', sans-serif;
    color: blue;
`;

export const LoginRegisterWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`;

interface TextLoginProps {
    isActive: boolean;
}

export const TextLogin = styled.p`
    margin: 5px 0;
    font-size: 16px ;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border-bottom: ${({isActive}: TextLoginProps) => isActive ? `2px solid #EF5DA8`: `none`};
`;

export const InputsWrapper = styled.div`
    margin: 0px 30px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
`;

export const LoginButtonsWrapper = styled.div`
    display: flex;
    height: 350px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin: 20px 30px;
`;