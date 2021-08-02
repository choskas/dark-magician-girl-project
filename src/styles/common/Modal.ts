import styled from 'styled-components';

interface ModalContainerProps {
    isVisible: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.3);
  @keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}
  animation-name: zoom;
  animation-duration: 0.6s;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  &:focus{
    color: #bbb;
  text-decoration: none;
  cursor: pointer;
  }
  &:hover{
    color: #bbb;
  text-decoration: none;
  cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  @keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}
  animation-name: zoom;
  animation-duration: 0.6s;
  width: 100%;
`;