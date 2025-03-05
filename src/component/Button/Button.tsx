import React, { useState, useEffect, forwardRef } from "react";
import { StyledButton, StyledIconButton, StyledButtonTooltipContent } from "./Button.style";
import { ButtonProps } from "./Button.type";
import { theme } from '../../style/theme';

/**BaseButton 組件 */
export const BaseButton = React.memo(({
    label,
    $backgroundColor = theme.colors.gray,
    $hoverBackgroundColor = theme.colors.grayDark,
    $textColor = theme.colors.light,
    disabled = false,
    tooltip,
    onClick,
    ...props
}: ButtonProps) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        if (tooltip) setShowTooltip(true);
        if (onClick) onClick();
    }

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => {
                setShowTooltip(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip])

    return (
        <StyledButton
            $backgroundColor={$backgroundColor}
            $hoverBackgroundColor={$hoverBackgroundColor}
            $textColor={$textColor}
            disabled={disabled}
            label={label}
            onClick={handleClick}
            {...props}>
            {label}
            {tooltip
                ? <StyledButtonTooltipContent $show={showTooltip}>
                    {tooltip}
                </StyledButtonTooltipContent>
                : null}
        </StyledButton>
    );
})

/**BaseIconButton 組件 */
export const BaseIconButton = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    $backgroundColor = theme.colors.transparent,
    $hoverBackgroundColor = theme.colors.transparent,
    $textColor = theme.colors.dark,
    disabled = false,
    tooltip,
    onClick,
    ...props
}, ref) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        if (tooltip) setShowTooltip(true);
        if (onClick) onClick();
    }

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => {
                setShowTooltip(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip])

    return (
        <StyledIconButton
            ref={ref}
            $backgroundColor={$backgroundColor}
            $hoverBackgroundColor={$hoverBackgroundColor}
            $textColor={$textColor}
            disabled={disabled}
            label={label}
            onClick={handleClick}
            {...props}>
            {label}
            {tooltip
                ? <StyledButtonTooltipContent $show={showTooltip}>
                    {tooltip}
                </StyledButtonTooltipContent>
                : null}
        </StyledIconButton>
    )
})

BaseButton.displayName = "BaseButton";
BaseIconButton.displayName = "BaseIconButton";