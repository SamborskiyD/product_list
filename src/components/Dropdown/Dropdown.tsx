import React, { useState } from "react";
import "./styles.scss";
type DropdownProps = {
  categories: string[];
  selectedCategories: string[];
  onChange: (selectedCategories: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  selectedCategories,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="button" onClick={toggleDropdown}>
        Categories
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
