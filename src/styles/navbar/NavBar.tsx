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
    border-radius: 9px;
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
        justify-content: flex-end;
        width: 410px;
        padding-right: 100px;
        align-items: center;
    }
`;

export const NavBarText = styled.p`
    display: none;
    // desktop
    @media screen and (min-width: 1000px) {
        display: block;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        margin: 0 20px;
        cursor: pointer;
    }
`;

export const UserImage = styled.img`
    // desktop
    @media screen and (min-width: 1000px) {
    border: 1px solid #fff;
    border-radius: 9px;
    width: 50px;
    height: 50px;
    align-items: center;
    margin: 10px 0 0 20px;
    }
`;

export const ProfileInfoWrapper = styled.div`
    // desktop
    @media screen and (min-width: 1000px) {
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        font-size: 18px;
    }
`;

interface NavBarCollapse {
    isOpen: boolean;
}

export const NavBarCollapse = styled.div<NavBarCollapse>`
    // desktop
    @media screen and (min-width: 1000px) {
        cursor: pointer;
        display: flex;
        right: 120px;
    }
    padding: 0 18px;
    background-color: white;
    height: auto;
    width: 90px;
    overflow: hidden;
    position: absolute;
    -webkit-transition: max-height 0.2s ease-out;
    transition: max-height 0.2s ease-out;
    top: 60px;
    z-index: 1;
    width: 200px;
    max-height: ${({ isOpen }) => isOpen ? '100%' : '0'};
    margin-top: 10px;
    right: 0;
    border-radius: 9px;
    flex-direction: column;
`;

export const CollapseOption = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 15px 0;
    border-bottom: 1px solid black;
    width: 100%;
    color: black;
    height: 20%;
    display: flex;
    align-items: center;
`;