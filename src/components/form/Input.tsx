"use client";

import React, { ChangeEventHandler, CSSProperties } from "react";

export interface InputProps {
    name?: string;
    label?: string;
    type?: string;
    placeHolder?: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    error?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    ariaLabel?: string;
    autoFocus?: boolean;
    style?: CSSProperties;
    min?: number | string;
    max?: number | string;
}

const Input = ({
    name,
    label,
    type = "text",
    placeHolder,
    value,
    defaultValue,
    onChange,
    className,
    labelClassName,
    inputClassName,
    error,
    disabled = false,
    readOnly = false,
    required = false,
    ariaLabel,
    autoFocus = false,
    style = {},
    min,
    max,
    ...rest
}: InputProps) => {
    const isError = Boolean(error);

    const inputStyle = {
        width: "100%",
        ...style,
    };

    return (
        <div className={className}>
            {label && <label className={labelClassName}>{label}</label>}
            <input 
                type={type}
                name={name}
                placeholder={placeHolder || ""}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                className={inputClassName}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                aria-label={ariaLabel}
                autoFocus={autoFocus}
                style={inputStyle}
                min={min}
                max={max}
                {...rest}
            />
            {isError && <span>{error}</span>}
        </div>
    );
};

export default Input;