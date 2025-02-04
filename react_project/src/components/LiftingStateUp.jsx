import { useState } from "react";

export const LiftingStateUp = () => {
  const [inputValue, setinputValue] = useState("");

  return (
    <>
      <InputComponent inputValue={inputValue} setinputValue={setinputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setinputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      ></input>
    </>
  );
};
const DisplayComponent = ({ inputValue }) => {
  return <p>The value of the input component is :{inputValue} </p>;
};
