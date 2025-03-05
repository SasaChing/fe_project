import { ButtonProps } from "./Button.type";
import styled from "styled-components";
import { theme } from '../../style/theme';

/**BaseButton按鈕的樣式 */
export const StyledButton = styled.button<ButtonProps>`
    position: relative;
    border: none;
    font-size: 12px;
    margin: 2px;
    padding: 3px 8px;
    color: ${({ $textColor }) => $textColor || theme.colors.light};
    border-radius: 5px;
    cursor: "pointer";
    background-color:  ${(props) => props.$backgroundColor};
    
    &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor}
    }

    &:disabled {
        background-color: ${theme.colors.gray};
        cursor: not-allowed;
    }
`;

/**BaseIconButton按鈕的樣式 */
export const StyledIconButton = styled.button<ButtonProps>`
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.$backgroundColor};
    font-size: 12px;
    margin: 2px;
    padding: 4px 5px;
    color: ${(props) => props.$textColor};
    border-radius: 5px;

    &:hover {
        background-color: ${(props) => props.$hoverBackgroundColor}
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

/**StyledButtonTooltipContent 樣式 */
export const StyledButtonTooltipContent = styled.div<{ $show: boolean }>`
    position: absolute;
    white-space: nowrap;
    opacity: ${(props) => (props.$show ? 1 : 0)};
    visibility: ${(props) => (props.$show ? "visible" : "hidden")};
    transition: opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
`;

/**下拉選單按鈕的樣式 */
export const StyledButtonContainer = styled.div`
    position: relative;
    display: inline-block;
`;