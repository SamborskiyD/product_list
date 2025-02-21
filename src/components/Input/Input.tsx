import { ChangeEvent } from "react";
import "./styles.scss";

interface InputProps {
  id: string;
  value: string;
  label: string;
  type: "text" | "checkbox";
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  placeholder,
  value,
  label,
  type,
  name,
  onChange,
}: InputProps) => {
  return (
    <div className="container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default Input;
