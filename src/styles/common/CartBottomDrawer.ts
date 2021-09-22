import styled from "styled-components";

interface DrawerWrapperProps {
    isOpen: boolean;
}

export const CartDrawerWrapper = styled.div<DrawerWrapperProps>`
  position: fixed;
  overflow-y: auto;
  bottom: 10px;
  left: 0;
  width: 100%;
  opacity: 1;
  transform: ${({isOpen}) => isOpen ? 'translateY(0%)' : 'translateY(93%)' };
  transition: 0.3s;
  height: 85vh;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CartCloseIconDrawer = styled.img`
    color: #EF5DA8;
    width: 20px;
    float: right;
`; 

export const CartTitleWrapper = styled.div`
    background-color: #5D5FEF;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 24px;
    height: 9%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const CollapseIconWrapper = styled.img`
    margin-left: 30%;
    margin-right: 10px;
    cursor: pointer;
`;

export const CartContent = styled.div`
    background: #fff;
    height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
`;
