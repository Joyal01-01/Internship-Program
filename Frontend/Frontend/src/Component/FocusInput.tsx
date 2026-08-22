import { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
};

export default FocusInput;