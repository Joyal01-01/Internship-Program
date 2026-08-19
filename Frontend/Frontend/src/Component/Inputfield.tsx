import { useState } from "react"

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1>{inputValue}</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputField