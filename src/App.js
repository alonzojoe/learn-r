import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurane",
      amount: 294.56,
      date: new Date(2023, 10, 17),
    },
    {
      id: "e2",
      title: "House Loan",
      amount: 525.25,
      date: new Date(2023, 10, 18),
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

  return (
    <div>
      <h2>Let's get started</h2>
      <p>This is React js</p>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

      {/* { expenses.map((item) => {
        return <ExpenseItem />
      }) } */}
    </div>
  );
}

export default App;
