import styled from "styled-components";
import { StyledMenuProps } from "./Menu.type";

export const StyledMenu = styled.div<StyledMenuProps>`
    position: fixed;
    top: ${(props) => props.top > 0 ? `${props.top}px` : "unset"};
    left: ${(props) => props.left > 0 ? `${props.left}px` : "unset"};
    min-width: ${(props) => `${props.minWidth}px`};
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
    overflow: hidden;
`;

export const StyledMenuItem = styled.div`
    padding: 8px 15px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;