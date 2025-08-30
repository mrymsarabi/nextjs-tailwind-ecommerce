import React, { ReactNode, CSSProperties } from "react";
import styles from "../styles/components/Button.module.scss";
// import Icon from "./Icon";

export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    children?: ReactNode;
    text?: string;
    icon?: string;
    className?: string;
    iconClassName?: string;
    contentClassName?: string;
    isLoading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ariaLabel?: string;
    width?: string | number;
    height?: string | number;
    style?: CSSProperties;
    iconSize?: number;
    iconColor?: string;
}

const Button = ({
    type = "submit",
    children,
    text,
    icon,
    className,
    iconClassName,
    contentClassName,
    isLoading = false,
    disabled = false,
    ariaLabel = "Button",
    onClick,
    width,
    height,
    style,
    iconSize = 32,
    iconColor = "#000000",
    ...rest
}: ButtonProps) => {
    const buttonClasses = `${styles.button} ${className || ""} ${isLoading ? styles.loading : ""}`;
    const iconClasses = `${styles.icon} ${iconClassName || ""}`;
    const contentClasses = `${styles.content} ${contentClassName || ""}`;

    const combinedStyle: CSSProperties = {
        width,
        height,
        ...style,
    };

    return (
        <button
            className={buttonClasses}
            disabled={isLoading || disabled}
            aria-label={ariaLabel}
            onClick={onClick}
            type={type}
            style={combinedStyle}
            {...rest}
        >
        {icon && !isLoading && (
            <span className={iconClasses}>
            
            
                {/* <Icon icon={icon} size={iconSize} color={iconColor} /> */}
            </span>
        )}
        {isLoading ? (
            <span className={styles.spinner}></span>
        ) : (
            <span className={contentClasses}>{children || text}</span>
        )}
        </button>
    );
};

export default Button;
