const { useState } = require("react");

const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>() => {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<T>) => {
    setValue((e.target as T).value);
  };
  return { onChange, setValue, value };
};

export default useInput;