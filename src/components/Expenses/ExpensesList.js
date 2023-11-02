import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  console.log(props.expenses.length);
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expense-list">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenses={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
