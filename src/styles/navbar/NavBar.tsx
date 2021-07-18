import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 56px;
    width: auto;
    background-color: #2295D0;
    font-family: "Dharma-Regular";
    font-size: 42px;
    color: #fff;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // desktop
    @media screen and (min-width: 1000px) {
        font-size: 80px;
        height: 72px;
    }
`;

export const HaamburgerImage = styled.img`
    width: 24px;
    height: 21px;
    cursor: pointer;
    // desktop
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const TextWrapper = styled.div`
    display: none;
    // desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 400px;
        padding-right: 100px;
    }
`;

export const NavBarText = styled.p`
    display: none;
    // desktop
    @media screen and (min-width: 1000px) {
        display: block;
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    }
`;