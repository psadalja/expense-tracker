import React from "react";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  return (
    <div>
      <h2>Lets Get Started</h2>
      {/* <p>this is not visible</p> */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
};

export default App;
