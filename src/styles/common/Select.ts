import styled from 'styled-components';
interface OptionsContainerProps {
    isVisibleOptions: boolean;
}
export const OptionsContainer = styled.ul<OptionsContainerProps>`
display: ${({isVisibleOptions}) => isVisibleOptions ? 'block' : 'none'};
    width: 98%;
    border: 1px solid #ef5da8;
    margin: 0;
    padding: 0 5px;
    max-height: 100px;
    overflow-y: auto;
`;

export const Option = styled.li`
    width: 96%;
    cursor: pointer;
    margin: 0;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
`;