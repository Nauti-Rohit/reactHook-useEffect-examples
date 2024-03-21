import { useState, useEffect } from "react";

export default function Counter() {
  let [Countx, setCountx] = useState(0);
  let [County, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((Countx = Countx + 1));
  };
  let incCounty = () => {
    setCounty((County = County + 1));
  };

  useEffect(
    function printSomething() {
      console.log("Side-Effect called");
    },
    [Countx, County]
  );
  return (
    <>
      <h1>Countx = {Countx}</h1>
      <button onClick={incCountx}>+1</button>

      <h1>County = {County}</h1>
      <button onClick={incCounty}>+1</button>
    </>
  );
}
