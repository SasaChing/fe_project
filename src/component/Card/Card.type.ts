/**Card樣式判斷參數 */
export interface CardStyleProps {
    $disabled?: boolean;
}
export interface CardProps {
    cardHeader?: React.ReactNode | string
    cardContent?: React.ReactNode | string
    cardFooter?: React.ReactNode | string
    disabled?: boolean
}
