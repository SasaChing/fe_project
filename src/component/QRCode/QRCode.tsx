import React from "react";
import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QRCodeProps } from "./QRCode.type";
import { StyledQRCodeWrapper } from "./QRCode.style";
import { theme } from "../../style/theme";


export const QRCode = React.memo(({ text }: QRCodeProps) => {
    const [size, setSize] = useState<number>(600);
    const containerRef = useRef<HTMLDivElement>(null)

    /** 監聽容器大小變化 */
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const containerWidth = entry.contentRect.width;
                const containerHeight = entry.contentRect.height;
                const newSize = Math.max(Math.min(containerWidth * 0.8, containerHeight * 0.8, 600), 100);
                setSize(newSize);
            }
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <StyledQRCodeWrapper ref={containerRef}>
            <QRCodeCanvas value={text} size={size}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    background: theme.colors.light,
                    padding: "10px",
                    borderRadius: "8px"
                }} />
        </StyledQRCodeWrapper>
    );
})

QRCode.displayName = "QRCode";