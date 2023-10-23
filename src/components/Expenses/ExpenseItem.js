import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenses.title);
  console.log("Expense Item Evaluated");

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenses.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">$ {props.expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
