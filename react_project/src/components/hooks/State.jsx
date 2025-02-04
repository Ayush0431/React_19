import { useState } from "react";
export const State = () => {
    //useState hook is used to create state in functional component
  //useState returns an array where the first element is the current state and the second element is a function to update the state
  const [count, setCount] = useState(0);
  //here const is a varible
  //count is the number which keeps the count of the button clicked
  //set count is a function that helps to update the count
  //useState is a hook and the 0 inside the parenthses is a count intitial value

  const handlebuttonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handlebuttonClick}>Increment</button>
      </section>
    </>
  );
};
