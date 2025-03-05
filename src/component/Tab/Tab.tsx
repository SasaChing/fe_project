import React, { useRef, useState, useEffect } from "react";
import { StyledTabButtonContainer, StyledTabButtonContent, StyledTabButton } from "./Tab.style";
import { TabProps } from "./Tab.type";
import { EllipsisVertical } from "lucide-react";
import { BaseIconButton } from "../Button/Button";
import { StyledButtonContainer } from "../Button/Button.style";
import { Menu } from "../Menu/Menu";

export const Tab = React.memo(({
    tabButtonItems,
    tabContainerItems,
    activeTabIndex,
    menuItems
}: TabProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0, minWidth: 0 })
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // **計算並調整 Menu 位置**
    useEffect(() => {
        if (isOpen && buttonRef.current && menuRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const menuRect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let top = 0;
            let left = viewportWidth - menuRect.width - buttonRect.width;
            let minWidth = buttonRect.width;

            if (top + menuRect.height > viewportHeight) {
                top = buttonRect.height - menuRect.height - 4;
            }
            setPosition({ top, left, minWidth });
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    return (
        <React.Fragment>
            <StyledTabButtonContainer>
                <StyledTabButtonContent>
                    {tabButtonItems.map((item, index) => (
                        <StyledTabButton
                            key={index}
                            $active={activeTabIndex === index}
                            onClick={item.onClick}>
                            {item.label}
                        </StyledTabButton>
                    ))}
                </StyledTabButtonContent>
                <StyledTabButtonContent>
                    <StyledButtonContainer>
                        <BaseIconButton
                            ref={buttonRef}
                            onClick={toggleMenu}
                            label={<EllipsisVertical size={18} />} />
                        {isOpen && menuItems && (
                            <Menu
                                ref={menuRef}
                                top={position.top}
                                left={position.left}
                                minWidth={position.minWidth}
                                content={menuItems} />)}
                    </StyledButtonContainer>
                </StyledTabButtonContent>
            </StyledTabButtonContainer>
            {tabContainerItems[activeTabIndex]}
        </React.Fragment>
    )
})

Tab.displayName = "Tab";