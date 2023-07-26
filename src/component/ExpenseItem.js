import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   const expenseDate = new Date();
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      {/* <div>Date</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <h2>{1+1 }</h2>
                <div className="expense-item__price">$294.67</div>
      </div> */}
      {/* <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div> */}
      {/* <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div> */}
      {/* <div>{props.expense.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.amount}</div>
      </div> */}
      <div>
        <ExpenseDate date={props.expense.date}></ExpenseDate>
      </div>
      <div>{props.expense.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
