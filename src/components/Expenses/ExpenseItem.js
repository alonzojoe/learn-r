import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

function ExpenseItem(props) {

  let title = props.expenses.title

  const changeTitle = () => {
    title = 'asd'
  }

  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenses.date} />
      
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>$ {props.expenses.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
