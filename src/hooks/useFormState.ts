import { useState } from 'react';

export function useFormState<T extends Record<string, string>>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetValues = () => {
    setValues(initialState);
  };
  return { values, handleChange, resetValues };
}
