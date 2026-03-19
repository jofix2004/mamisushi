import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  helperText?: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  min?: string | number;
};

export function InputField({
  id,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error,
  type = "text",
  required = false,
  min,
}: InputFieldProps) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        min={min}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-helper ${id}-error`}
        className={`min-h-[3.25rem] rounded-none border-0 border-b bg-transparent px-0 pb-3 pt-2 text-sm text-ink outline-none placeholder:text-ink-soft/70 ${
          error ? "border-error" : "border-line"
        }`}
      />
      {helperText ? (
        <p id={`${id}-helper`} className="text-sm text-ink-soft">
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
