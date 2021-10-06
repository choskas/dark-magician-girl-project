import styled from 'styled-components';

export const AddCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchInputWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const QuantityRarityWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SmallInputWrapper = styled.div`
    width: 140px;
`;

export const AddCardTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const AddCardTitle = styled.p`
    color: #5D5FEF;
    font-size: 24px;
    font-weight: bolder;
`;

export const AddCardSeparator = styled.hr`
    border: 1px solid #5D5FEF;
    width: 70%;
        // Desktop
        @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const AddCardPinkSeparator = styled.hr`
    border: 1px solid #EF5DA8;
    width: 95%;
    margin: 12px;
`;

export const AddCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;


export const CartCollapseContent = styled.div`
    margin: 20px 0;
`;

export const AddToStoreButtonContainer = styled.div`
    display: flex;
`;

export const SearchDeckFastChargeWrapper = styled.div`
padding: 50px 30px;
            // Desktop
            @media screen and (min-width: 1000px) {
                padding: 0px 30px;
    }
`;