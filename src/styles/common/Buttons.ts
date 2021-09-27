import styled from "styled-components";

export const CancelButton = styled.button`
    width: 324px;
    border: 1px solid #5D5FEF;
    border-radius: 8px;
    color: #5D5FEF;
    font-size: 16px;
    text-align: center;
    background: transparent;
    padding: 15px 40px;
`;

export const ConfirmButton = styled.button`
    width: 324px;
    height: 48px;
    background: radial-gradient(50% 50% at 50% 50%, #8C2163 0%, #C370A2 100%);
    font-size: 16px;
    text-align: center;
    border-radius: 9px;
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
  &:disabled{
    opacity: 0.5;
  }
`;