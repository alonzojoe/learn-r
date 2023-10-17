import './ExpenseItem.css'
import moment from 'moment'

function ExpenseItem() {
  const expenseDate = new Date(2023, 10, 17)
  const expenseTitle = "Car Insurance"
  const expenseAmount = 250.05

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div><h2>{expenseTitle}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">$ {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
