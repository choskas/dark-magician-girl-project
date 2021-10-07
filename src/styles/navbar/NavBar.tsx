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
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
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
        width: 24%;
        padding: 2%;
    }
  position: fixed;
  overflow-y: auto;
  bottom: 0;
  right: 0;
  width: 56%;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #fff 100%);
  opacity: 0.9;
  transform: ${({isOpen}) => isOpen ? 'translateX(0%)' : 'translateX(100%)' };
  transition: 0.3s;
  z-index: 1;
  padding: 5%;
`;

export const CollapseOption = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 15px 0;
    border-bottom: 1px solid #ef5da8;
    width: 100%;
    color: black;
    height: 5%;
    display: flex;
    align-items: center;
`;

export const CollapseOptionMyProfile = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 15px 0;
    border-bottom: 1px solid #ef5da8;
    width: 100%;
    color: black;
    height: 5%;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const NavBarProfileImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

export const CloseIconNavBar = styled.img`
    width: 24px;
    padding-top: 32px;
    float: left;
    cursor: pointer;
    // desktop
    @media screen and (min-width: 1000px) {
      cursor: pointer;
      width: 32px;
      padding-top: 40px;
    }
`;