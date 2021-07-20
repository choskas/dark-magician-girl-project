import styled from 'styled-components';

export const Separator = styled.hr`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: none;
    }
    width: 80%;
    border: 1px solid #F178B6;
    background: #F178B6;
    padding: 0 10%;
    margin: 40px 0;
`;

export const DesktopSeparator = styled.hr`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: block;
    }
    display: none;
    width: 80%;
    border: 1px solid #F178B6;
    background: #F178B6;
    padding: 0 10%;
    margin: 40px 0;
`;

export const DesktopVerticalSeparator = styled.div`
    // Desktop
    @media screen and (min-width: 1000px) {
        display: block;
    }
    border-left: 3px solid #F178B6;
    background: #F178B6;
    margin: 40px 20px;
`;

export const VerticalSeparatorMini = styled.div`
    border-left: 3px solid #F178B6;
    background: #F178B6;
    margin: 0;
    height: 30px;
`;