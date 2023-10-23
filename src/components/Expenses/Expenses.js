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

  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p style="color: #fff;">No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenses={expense} />
        ))
      )}
    </Card>
  );
}

export default Expenses;
