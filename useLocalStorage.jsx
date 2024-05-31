import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    
  // Initialize the state with the value from localStorage or defaultValue
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  // storing the theme value in Local Storage and to update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return the state value and the setter function
  return [value, setValue];
}
