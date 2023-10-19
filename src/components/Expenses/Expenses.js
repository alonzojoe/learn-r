import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
function Expenses(props) {
  console.log(props.expense)

  return (
    <Card className="expenses">
      <ExpenseItem expenses={props.expense[0]}></ExpenseItem>

      <ExpenseItem expenses={props.expense[1]}></ExpenseItem>

      <ExpenseItem expenses={props.expense[2]}></ExpenseItem>

      <ExpenseItem expenses={props.expense[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
