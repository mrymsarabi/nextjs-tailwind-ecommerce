import React from "react";

interface SwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
  labelClassName?: string;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  className = "",
  labelClassName = "",
}) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${labelClassName}`}>
      <div className={`relative inline-block w-11 h-6 ${className}`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="opacity-0 w-0 h-0"
        />
        <span
          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition bg-gray-300 rounded-full
            ${checked ? "bg-blue-600" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform
            ${checked ? "translate-x-5" : ""}
            ${disabled ? "opacity-50" : ""}`}
        />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
};

export default Switch;
