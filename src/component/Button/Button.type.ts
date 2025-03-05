import React from "react";

/**按鈕屬性類型 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    $backgroundColor?: string;
    $hoverBackgroundColor?: string;
    $textColor?: string;
    disabled?: boolean;
    label: string | React.ReactNode;
    tooltip?: React.ReactNode;
    onClick?: () => void;
}