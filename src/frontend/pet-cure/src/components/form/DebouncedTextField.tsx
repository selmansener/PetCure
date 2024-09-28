import React, { useState, useEffect } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface DebouncedTextFieldProps extends Omit<TextFieldProps, 'onChange'> {
  onChange: (value: string) => void;
  delay?: number;
}

const DebouncedTextField: React.FC<DebouncedTextFieldProps> = ({
  onChange,
  delay = 500, // default delay is 500ms
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue);
    }, delay);

    // Cleanup the timeout if the user types before the delay is over
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay, onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <TextField
      {...props}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default DebouncedTextField;
