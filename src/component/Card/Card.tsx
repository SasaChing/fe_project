import React from "react";
import { CardContainer, CardHeader, CardContent, CardFooter } from "./Card.style";
import { CardProps } from "./Card.type";

export const Card = React.memo(({
    cardHeader,
    cardContent,
    cardFooter,
    disabled = false }: CardProps) => {
    return (
        <React.Fragment>
            <CardContainer $disabled={disabled}>
                <CardHeader $disabled={disabled}>
                    {cardHeader}
                </CardHeader>
                <CardContent $disabled={disabled}>
                    {cardContent}
                </CardContent>
                <CardFooter $disabled={disabled}>
                    {cardFooter}
                </CardFooter>
            </CardContainer>
        </React.Fragment>
    )
})

Card.displayName = "Card";