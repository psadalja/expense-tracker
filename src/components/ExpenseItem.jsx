import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expanseName = "Nachos";
  const expanseAmount = 85;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expanseName}</h2>
      </div>
      <div className="expense-item__price">{expanseAmount}</div>
    </div>
  );
};

export default ExpenseItem;
