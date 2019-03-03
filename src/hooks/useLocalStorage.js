import React, { Dispatch } from 'react';

export default function useLocalStorage(key,initialValue)
{
  const [item, setValue] = React.useState(() => {
    const value = localStorage.getItem(key) || initialValue;
    localStorage.setItem(key, value);
    return value;
  });

  const setItem = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  const removeItem = (key) => {
    setValue(undefined);
    localStorage.removeItem(key);
  };

  return [item, setItem, removeItem];
}