import { forwardRef } from "react";
import { StyledMenu, StyledMenuItem } from "./Menu.style";
import { MenuProps } from "./Menu.type";

export const Menu = forwardRef<HTMLDivElement, MenuProps>(({ top, left, minWidth, content }, ref) => {
    return (
        <StyledMenu ref={ref} top={top} left={left} minWidth={minWidth}>
            {content.map((item, index) => (
                <StyledMenuItem key={index}>{item.name}</StyledMenuItem>
            ))}
        </StyledMenu>
    )
})

Menu.displayName = "Menu";