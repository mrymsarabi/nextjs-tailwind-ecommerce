import React from "react";

type RadioOption = {
    label: string;
    value: string;
};

type RadioGroupProps = {
    options: RadioOption[];
    value: string;
    setValue: (val: string) => void;
    name: string;
    direction?: "row" | "column";
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
    radioColor?: "primary" | "secondary" | "success" | "danger" | "warning";
};

const RadioGroup: React.FC<RadioGroupProps> = ({
    options,
    value,
    setValue,
    name,
    direction = "column",
    disabled = false,
    className = "",
    labelClassName = "",
    radioColor = "secondary",
}) => {
    return (
        <div
            className={`d-flex flex-wrap ${direction === "row" ? "flex-row gap-3" : "flex-column"} ${className}`}
        >
            {options.map((option) => {
                const isSelected = value === option.value;

                const getColorClass = () => {
                switch (radioColor) {
                    case "primary":
                        return "bg-primary";
                    case "success":
                        return "bg-success";
                    case "danger":
                        return "bg-danger";
                    case "warning":
                        return "bg-warning";
                    case "secondary":
                    default:
                        return "bg-secondary";
                }
                };

                return (
                    <label
                        key={option.value}
                        className={`d-flex align-items-center gap-2 cursor-pointer ${labelClassName}`}
                        style={{ cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1 }}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={isSelected}
                            onChange={() => setValue(option.value)}
                            disabled={disabled}
                            className="d-none"
                        />
                        <div
                            className="d-flex align-items-center justify-content-center border border-2 rounded-circle"
                            style={{
                                width: "17px",
                                height: "17px",
                                borderColor: isSelected ? "var(--bs-" + radioColor + ")" : "#ccc",
                            }}
                        >
                            {isSelected && (
                                <div
                                    className={`rounded-circle ${getColorClass()}`}
                                    style={{ width: "11px", height: "11px" }}
                                />
                            )}
                        </div>
                        <span className="small">{option.label}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default RadioGroup;
