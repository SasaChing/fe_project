import { StyledMenuItemProps } from '../Menu/Menu.type';

/**Tab樣式判斷參數 */
export interface TabStyleProps {
    $disabled?: boolean;
    $active?: boolean;
}
export interface TabButtonItemsProps {
    label: string;
    onClick: () => void;
}

export interface TabProps {
    tabButtonItems: TabButtonItemsProps[]
    tabContainerItems: React.ReactNode[]
    activeTabIndex: number
    menuItems?: StyledMenuItemProps[]
}

