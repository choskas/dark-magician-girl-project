import styled from "styled-components";

export const WhatsappButtonStyle = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 3;
  &:hover{
      opacity: 0.5;
  }
`;

export const WhatsAppImage = styled.img`
  width: 90%;
  margin: 3px 0;
`;
