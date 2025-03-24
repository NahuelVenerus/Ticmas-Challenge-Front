const { useState } = require("react");

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };
  return { onChange, setValue, value };
};

export default useInput;