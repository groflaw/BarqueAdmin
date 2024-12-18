import { useState, useEffect, useCallback } from "react";

const NumberInput = ({ value = 0, onChange, width, name, max }) => {
  const [numberValue, setNumberValue] = useState(value);

  // Ensure a valid value on prop change
  useEffect(() => {
    setNumberValue(value ?? 0);
  }, [value]);

  const handleIncrease = useCallback(() => {
    setNumberValue((prevValue) => {
      const newValue = prevValue + 1;
      if (max != null && newValue > max) return prevValue;

      onChange({ target: { name, value: newValue } });
      return newValue;
    });
  }, [max, name, onChange]);

  const handleDecrease = useCallback(() => {
    setNumberValue((prevValue) => {
      const newValue = Math.max(prevValue - 1, 0);
      onChange({ target: { name, value: newValue } });
      return newValue;
    });
  }, [name, onChange]);

  const handleChangeText = useCallback(
    (text) => {
      const numericValue = parseInt(text, 10);
      if (!isNaN(numericValue)) {
        const updatedValue =
          max != null && numericValue > max ? max : numericValue;
        setNumberValue(updatedValue);
        onChange({ target: { name, value: updatedValue } });
      }
    },

    [name, onChange]
  );

  return (
    <input
      type="number"
      className="flex-1 h-10 p-2  w-full"
      style={styles.number}
      value={String(numberValue)} // Convert to string for the input
      onChange={(e) => handleChangeText(e.target.value)}
    />
  );
};
const styles = {
  number: {
    borderRadius: "8px",
    boxShadow: "2px 2px 4px rgba(3,3,3,0.1)",
    outline: "none",
    border: "none",
  },
};
export default NumberInput;
