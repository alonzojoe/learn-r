import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
function Expenses(props) {
  // console.log(props.expense)

  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.expense.map((expense) => (
        <ExpenseItem key={expense.id} expenses={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
