import React, { useEffect, useState } from "react";

const Option = ({
  defaultValue,
  width,
  options,
  name,
  onChange,
  placeholder,
  _id,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(value);
    onChange({ target: { name, value, _id } });
  };

  return (
    <div className={`flex flex-row items-center justify-between ${width}`}>
      <select
        value={selectedValue || ""}
        onChange={handleChange}
        className="h-10 bg-white  w-full"
        style={styles.selct}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  selct: {
    border: " none",
    outline: "none",
    borderRadius: "8px",
    boxShadow: "2px 2px 4px rgba(3,3,3,0.1)",
  },
};

export default Option;
