import styled from 'styled-components';

export const LoginButtonContainer = styled.button`
    font-family: 'Montserrat', sans-serif;
    width: 341px;
    height: 48px;
    background: radial-gradient(50% 50% at 50% 50%, #8C2163 0%, #C370A2 100%);
    font-size: 24px;
    text-align: center;
    border-radius: 9px;
    margin: 0 30px;
    color: #fff;
    border: none;
    box-shadow: 3px 3px 3px #8C2163;
    cursor: pointer;
    &:hover{
		opacity: 0.5;
	}
	&:active{
		box-shadow: none;
	}
`;

export const LoginButtonImage = styled.img`
    // Desktop
    @media screen and (min-width: 1000px) {
        top: 45px;
    }
    cursor: pointer;
    top: 35px;
    position: relative;
    left: -150px;
    width: 25px;
    &:hover{
		opacity: 0.5;
	}
	&:active{
		box-shadow: none;
	}
`;
