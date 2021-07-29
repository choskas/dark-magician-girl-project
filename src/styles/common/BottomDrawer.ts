import styled from "styled-components";

interface DrawerWrapperProps {
    isOpen: boolean;
}

export const DrawerWrapper = styled.div<DrawerWrapperProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #fff 100%);
  opacity: 0.9;
  transform: ${({isOpen}) => isOpen ? 'translateY(0%)' : 'translateY(100%)' };
  transition: 0.3s;
  height: 30vh;
  padding: 5%
`;
