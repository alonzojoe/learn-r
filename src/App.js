import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurane",
    amount: 294.56,
    date: new Date(2023, 11, 17),
  },
  {
    id: "e2",
    title: "House Loan",
    amount: 525.25,
    date: new Date(2023, 9, 18),
  },
  {
    id: "e3",
    title: "Monthly Expenses",
    amount: 1549,
    date: new Date(2023, 10, 31),
  },
  {
    id: "e4",
    title: "Allowance",
    amount: 1450,
    date: new Date(2023, 10, 31),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpense = (data) => {
    console.log("App.js", data);
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
