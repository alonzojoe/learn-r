import ExpenseList from "./ExpensesList";
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
      <ExpenseList expenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && (
        <p style={{ color: "#fff" }}>No Expenses Found</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenses={expense} />
        ))} */}
    </Card>
  );
}

export default Expenses;
