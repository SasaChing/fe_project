import { CardStyleProps } from './Card.type';
import styled from "styled-components";
import { theme } from '../../style/theme';

export const CardContainer = styled.div<CardStyleProps>`
    width: 120px;
    border: 1px solid ${(props) => (props.$disabled ? theme.colors.gray : theme.colors.infoLight)};
    border-radius: 8px;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;
export const CardHeader = styled.div<CardStyleProps>`
    background-color: ${(props) => (props.$disabled ? theme.colors.gray : theme.colors.info)};
    color: white;
    font-weight: bold;
    padding: 5px;
`;
export const CardContent = styled.div<CardStyleProps>`
    font-weight: bold;
    padding: 16px 0;
    color:${(props) => (props.$disabled ? theme.colors.gray : theme.colors.dark)};
`;
export const CardFooter = styled.div<CardStyleProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    border-top: 1px solid ${(props) => (props.$disabled ? theme.colors.gray : theme.colors.infoLight)};
`;
export const Count = styled.div<CardStyleProps>`
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
    color:${(props) => (props.$disabled ? theme.colors.gray : theme.colors.dark)};
`;
export const GroupCardRow = styled.div`
    display: flex;
    border: 1px solid ${theme.colors.gray};
    border-radius: 10px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    gap: 10px;
`;
export const GroupLabel = styled.div`
    display: flex;
    justify-content: flex-start; 
    width: 100%; 
`;