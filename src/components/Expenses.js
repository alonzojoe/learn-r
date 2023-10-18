import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'
function Expenses() {
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

  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses[0]}></ExpenseItem>

      <ExpenseItem expenses={expenses[1]}></ExpenseItem>

      <ExpenseItem expenses={expenses[2]}></ExpenseItem>

      <ExpenseItem expenses={expenses[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
