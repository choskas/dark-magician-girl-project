import styled from 'styled-components';

export const AllImagesContainer = styled.div`
    padding: 10px 20px;
    border: 1px solid #ef5da8;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const CardImage = styled.img`
    height: 110px;
    width: 75px;
    &:hover {
        border: 2px solid #ef5da8;
    }
`;

export const CardInfoModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
`;

export const CardInfoImage = styled.img`
    height: 300px;
    width: 200px;
`;

export const CardInfoDescription = styled.p`
    font-size: 20px;
`