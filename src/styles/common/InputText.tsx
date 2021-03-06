import styled from "styled-components";

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  position: relative;
`;

export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 1px solid #ef5da8;
  padding-left: 10px;
  color: black;
  background: transparent;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  &:focus {
    outline: none !important;
    border: 1px solid #ef5da8;
    box-shadow: 0 0 5px #ef5da8;
  }
  &:focus,
  &:not(:placeholder-shown) {
    & + .input__label {
      transform: translate(0.25rem, -90%) scale(0.8);
      color: var(--color-accent);
    }
  }
`;

export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 10px;
  padding-right: 10px;
  margin: calc(var(--size-bezel) * 0.75 + 4px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: white;
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  margin: 13px 10px 0 10px;
  &:focus {
    transform: translate(0.1rem, -65%) scale(0.8);
    color: var(--color-accent);
  }
`;

export const InputIcon = styled.img`
  position: relative;
  float: right;
  margin: -36px 10px 0 0;
`;

export const Autocomplete = styled.div`
  width: 99%;
  height: auto;
  border-left: 1px solid #ef5da8;
  border-right: 1px solid #ef5da8;
  border-bottom: 1px solid #ef5da8;
  margin-top: -2px;
  position: relative;
  z-index: 1;
`;

export const List = styled.ul`
  margin: 0;
  list-style: none;
`;

export const ListName = styled.li`
  font-family: "Montserrat", sans-serif;
  margin: 2px 0;
  cursor: pointer;
`;
