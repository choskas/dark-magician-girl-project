import styled from 'styled-components';

interface SwitchContentProps {
    isActive: boolean;
}

export const SwitchContent = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

export const CheckBox = styled.input`
    width: 50%;
    height: 93%;
    background-color: #ccc;
    border-radius: 34px;
    z-index: 2;
    border: none;
    -webkit-transition: .4s;
    -webkit-transition: .4s;
    box-shadow: ${({isActive}) => isActive ? '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' : ''};

    transition: .4s;
    ${({isActive}: SwitchContentProps) => isActive ? `
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  `: ``}
`;

export const SliderRound = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({isActive}: SwitchContentProps) => isActive ? '#EF5DA8' : '#5D5FEF'};
    border-radius: 34px;
    z-index: -1;
`;

export const SwitchText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;
`;

export const SwitchWrapper = styled.div`
    display: flex;
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px;
`;

export const Image = styled.img`
    width: 27px;
`;

export const Text = styled.p`
    margin: 5px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 12;

`;