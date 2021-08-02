import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 100px;
    height: auto;
    border: 1px solid #5D5FEF;
    border-radius: 5px;
    margin: 15px 5px 15px 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
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
    &:hover{
        opacity: 0.7;
    }
`;

export const CardName = styled.p`
    margin: 2px 4px;
    font-size: 12px;
`;

export const CardTitle = styled.p`
    margin: 2px 4px;
    font-size: 8px;
`;

export const CloseImage = styled.img`
    color: #EF5DA8;
    width: 20px;
`;