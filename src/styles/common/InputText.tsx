import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
	position: relative;
`;

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid #23C1BC;
    padding-left: 10px;
    color: black;
    background: transparent;
    border-radius: 10px;
		width: 100%;
		height: 35px;
		&:focus{
			outline: none !important;
    	border: 1px solid #23C1BC;
    	box-shadow: 0 0 5px #23C1BC;
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
