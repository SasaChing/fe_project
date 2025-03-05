import { TabStyleProps } from './Tab.type';
import styled from "styled-components";
import { theme } from '../../style/theme';

export const StyledTabContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    background-color: ${theme.colors.light};
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    overflow-y: auto;
`;
export const StyledTabButtonContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    width: 100%;
    padding: 0px 40px;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    
    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`;
export const StyledTabButtonContent = styled.div`
    display: flex;
    gap: 5px; 
    align-items: center;
    justify-content:center;
`;
export const StyledTabButton = styled.button<TabStyleProps>`
    padding: 8px 10px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.$active ? theme.colors.light : theme.colors.gray)};
    color: ${(props) => (props.$active ? theme.colors.info : theme.colors.dark)};
    border-radius: 5px 5px 0 0;
    transition: background-color 0.3s ease;
    font-weight: 700;
    min-width: 120px;
    z-index: ${(props) => (props.$active ? 1 : "none")};

    &:hover {
        z-index: "none";
        background-color: rgba(0, 0, 0, 0.1);
    }
`;