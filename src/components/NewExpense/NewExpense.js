import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpense = (data) => {
    const expense = {
      ...data,
      id: Math.random().toString(),
    };

    console.log(expense);
    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
};

export default NewExpense;
