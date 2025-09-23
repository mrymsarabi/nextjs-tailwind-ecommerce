import React from "react";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
}) => {
  return (
    <label className="form-check d-flex align-items-center gap-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {label && (
        <span className={`form-check-label ${disabled ? "text-muted" : ""}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
