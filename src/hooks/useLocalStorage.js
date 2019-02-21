import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue = null) {
  const [value, setValue] = useState(getValueFromLocalStorage(key));

  function init() {
    const initialValue = getValueFromLocalStorage(key);
    if (initialValue === null || initialValue === "null") {
      set(defaultValue);
    }
  }

  function getValueFromLocalStorage() {
    if (typeof localStorage === "undefined") {
      return null;
    }
    return localStorage.getItem(key);
  }

  function saveValueToLocalStorage(key, value) {
    if (typeof localStorage === "undefined") {
      return null;
    }
    return localStorage.setItem(key, value);
  }

  function set(newValue) {
    setValue(newValue);
    saveValueToLocalStorage(key, newValue);
  }

  function listen(e) {
    if (e.storageArea === localStorage && e.key === key) {
      setValue(e.newValue);
    }
  }

  function remove() {
    set(null);
    if (typeof localStorage === "undefined") {
      return false;
    }
    localStorage.removeItem(key);
  }

  //initialize
  useEffect(() => {
    init();
  }, []);

  // check for changes across windows
  useEffect(() => {
    window.addEventListener("storage", listen);
    return () => {
      window.removeEventListener("storage", listen);
    };
  });

  return {
    value,
    set,
    remove
  };
}

export default useLocalStorage;