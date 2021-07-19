import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 100px;
    height: 180px;
    border: 1px solid black;
    margin: 15px 5px 15px 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: grab;
    &:focus{
        cursor: grabbing;
    }
    &:target{
        cursor: grabbing;
    }
    &:active{
        cursor: grabbing;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 130px;
`;

export const CardName = styled.p`
    margin: 5px 0 0 0;
    font-size: 12px;
`;