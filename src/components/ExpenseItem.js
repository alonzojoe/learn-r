import './ExpenseItem.css'
import moment from 'moment'

function ExpenseItem(props) {
  const expenseDate = new Date(2023, 10, 17)
  const expenseTitle = "Car Insurance"
  const expenseAmount = 250.05

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div><h2>{props.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
