
/**按鈕屬性類型 */
export interface MenuProps {
    content: StyledMenuItemProps[];
    top: number;
    left: number;
    minWidth?: number;
}
export interface StyledMenuProps {
    top: number;
    left: number;
    minWidth?: number
}
export interface StyledMenuItemProps {
    name: string;
}