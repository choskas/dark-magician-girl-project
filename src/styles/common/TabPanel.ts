import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

export const TabWrapper = styled.div`
    display: flex;
    padding: 0 20px;
    justify-content: space-around;
`;
interface TabTitleProps {
    isActive: boolean;
}
export const TabTitle = styled.p<TabTitleProps>`
    font-size: 22px;
    color: ${({isActive}) => isActive ? '#ef5da8' : '#2295D0'};
    opacity: ${({isActive}) => isActive ? '1' : '0.4'};
    cursor: pointer;
    text-align: center;
    width: 100%;
`;

export const TabSeparator = styled.hr`
    width: 2px;
    background: #ef5da8;
`;

export const Tab = styled.div`
    padding: 10px;
    display: 'block';
`;
