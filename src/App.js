import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurane', amount: 294.56, date: new Date(2023, 10, 17) },
    { title: 'House Loan', amount: 525.25, date: new Date(2023, 10, 18) },
    { title: 'Monthly Expenses', amount: 1000, date: new Date(2023, 10, 31) },
    { title: 'Allowance', amount: 1000, date: new Date(2023, 10, 31) },
  ]

  return (
    <div>
      <h2>Let's get started</h2>
      <p>This is React js</p>

      { expenses.map((item) => {
        return <ExpenseItem />
      }) }
      
    </div>
  );
}

export default App;
