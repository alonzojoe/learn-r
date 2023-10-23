import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpense = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    console.log("receive data from child", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
};

export default NewExpense;
