import styled from 'styled-components';

export const LoginImage = styled.img`
    width: 100%;
    height: 30%;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
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
    margin: 30px 30px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const LoginButtonsWrapper = styled.div`
    display: flex;
    height: 200px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin: 20px 30px;
`;