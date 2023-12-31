import React from "react";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
      amount: 1000,
      date: new Date(2023, 10, 31),
    },
    {
      id: "e4",
      title: "Allowance",
      amount: 1000,
      date: new Date(2023, 10, 31),
    },
  ];

  return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, 'Lets get Started'),
    React.createElement(Expenses, {expense: expenses})
  );

  // return (
  //   <div>
  //     <h2>Let's get started</h2>
  //     <Expenses expense={expenses}/>
  //   </div>
  // );
}

export default App;
