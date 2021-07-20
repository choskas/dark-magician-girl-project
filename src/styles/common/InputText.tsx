import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
	position: relative;
`;

export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid #EF5DA8;
    padding-left: 10px;
    color: black;
    background: transparent;
    border-radius: 3px;
		width: 100%;
		height: 35px;
		&:focus{
			outline: none !important;
    	border: 1px solid #EF5DA8;
    	box-shadow: 0 0 5px #EF5DA8;
		}
    &:focus,
    &:not(:placeholder-shown) {
      & + .input__label {
        transform: translate(.25rem, -75%) scale(.8);
        color: var(--color-accent);
      }
    }
`;

export const Span = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 10px;
		padding-right: 10px;
    margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * .5);
    background: pink;
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    background: white;
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.2;
		margin: 7px 10px 0 10px;
		&:focus {
        transform: translate(.1rem, -65%) scale(.8);
        color: var(--color-accent);
    }
`;

export const InputIcon = styled.img`
  position: relative;
  float: right;
  margin: -30px 10px 0 0;

`;
