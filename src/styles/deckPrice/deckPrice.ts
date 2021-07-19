import styled from 'styled-components';

export const SearchDeckWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        padding: 50px 30px 50px 30px;
        height: 60vh;
    }

`;

export const SearchBothInputWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        width: 65vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: auto;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    margin: 20px 0 20px 0;
`;

export const SearchInputWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        width: 500px;
    }

`;

export const SearchAndMyDeckWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        margin: 10px 0 0 0;
        display: flex;
    }

`;

export const AllCardsWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 65vw;
        height: 400px;
        overflow-y: auto;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

export const MyDeck = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 65vw;
        height: 400px;
        overflow-y: auto;
    }

`;

export const MyDeckWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        width: 30vw;
        height: 400px;
        overflow-y: auto;
        margin: 0;
    }
    font-family: 'Montserrat', sans-serif;
    height: 400px;
    overflow-y: auto;
    margin: 40px 0 0 0;

`;

export const DeckWrapper = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    font-family: 'Montserrat', sans-serif;
    margin: 40px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content: center;
`;