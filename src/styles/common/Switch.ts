import styled from 'styled-components';

interface SwitchContentProps {
    isActive: boolean;
}

export const SwitchContent = styled.div`
    height: 25px;
    width: 100px;
    cursor: pointer;
    background: ${({isActive}: SwitchContentProps) => isActive ? `linear-gradient(90deg, #FFC0CB 50%, #fff 50%)`: `linear-gradient(90deg, #fff 50%, red 50%);`  };
    font-family: 'Montserrat', sans-serif;
    border-radius: 15px;
    border: 1px solid black;
`;

export const SwitchText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
`;