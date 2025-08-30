import React, { useState, useRef, useEffect } from "react";

export interface option {
    label: string;
    value: string;
}

export interface SelectProps {
    label?: string;
    options: option[];
    value: string | number;
    defaultOption?: option;
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
    labelClassName?: string;
    inputClassName?: string;
    selectClassName?: string;
    optionsClassName?: string;
}

const CustomSelect = ({
    label,
    options,
    value,
    defaultOption,
    onChange,
    className = "",
    disabled = false,
    labelClassName = "",
    inputClassName = "",
    selectClassName = "",
    optionsClassName = "",
}: SelectProps) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<option[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // 🛡️ Safe filtering with null-checks
    useEffect(() => {
        const safeOptions = options.filter(
            (opt): opt is option => !!opt && typeof opt.label === "string"
        );

        const term = searchTerm.toLowerCase();
        setFilteredOptions(
            safeOptions.filter((opt) =>
                opt.label.toLowerCase().includes(term)
            )
        );
    }, [searchTerm, options]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (selectedValue: string) => {
        onChange(selectedValue);
        setOpen(false);
        setSearchTerm("");
    };

     const selectedLabel =
        options.find((opt) => opt?.value === value)?.label ||
        defaultOption?.label ||
        "انتخاب کنید";

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {label && <label className={`block mb-1 ${labelClassName}`}>{label}</label>}

            <div
                className={`border p-2 rounded cursor-pointer bg-white ${selectClassName} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !disabled && setOpen(!open)}
            >
                {selectedLabel}
            </div>

            {open && !disabled && (
                <div className={`absolute z-10 w-full mt-1 bg-white border rounded shadow max-h-60 overflow-y-auto ${optionsClassName}`}>
                    <input
                        type="text"
                        className={`w-full p-2 border-b outline-none ${inputClassName}`}
                        placeholder="سرچ کنید"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((opt) => (
                            <div
                                key={opt.value}
                                className={`p-2 cursor-pointer ${value === opt.value ? "bg-gray-200" : ""}`}
                                onClick={() => handleSelect(opt.value)}
                            >
                                {opt.label}
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">موردی یافت نشد</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
