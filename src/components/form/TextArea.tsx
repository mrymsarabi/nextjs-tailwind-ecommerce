import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  containerClassName = "",
  className = "",
  labelClassName = "",
  disabled = false,
  required = false,
  ...rest
}) => {
  return (
    <div className={`${containerClassName} mb-3`}>
      {label && (
        <label htmlFor={name} className={`form-label ${labelClassName}`}>
        {label} {required && "*"}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`form-control ${className}`}
        disabled={disabled}
        required={required}
        {...rest} 
      />
    </div>
  );
};

export default TextArea;
