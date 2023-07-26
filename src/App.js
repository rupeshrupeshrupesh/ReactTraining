// import logo from './logo.svg';
import "./App.css";
import React from "react";
import ExpenseItem from "./component/ExpenseItem";

const App=()=> {
  
  const expense = [
    { date: new Date("12/01/2023"), title: "news paper", amount: 200 },
    { date: new Date("11/01/2021"), title: "news lokamat", amount: 400 },
    { date: new Date("10/01/2022"), title: "news sakal", amount: 600 },
    { date: new Date("09/01/2024"), title: "news hitwada", amount: 800 },
  ];
  return React.createElement('div',{},
  React.createElement('h2',{},"lets get started"),
  React.createElement(ExpenseItem,{expense:expense[0]}),
  React.createElement(ExpenseItem,{expense:expense[1]}),

  React.createElement(ExpenseItem,{expense:expense[2]}),
  React.createElement(ExpenseItem,{expense:expense[3]}),


  )
  // (
  //   <div>
  //     <h2>lets get started</h2>
  //     {/* <ExpenseItem
  //       title={expense[0].title}
  //       amount={expense[0].amount}
  //       date={expense[0].date}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expense[1].title}
  //       amount={expense[1].amount}
  //       date={expense[1].date}
  //     ></ExpenseItem>
  //           <ExpenseItem
  //       title={expense[2].title}
  //       amount={expense[2].amount}
  //       date={expense[2].date}
  //     ></ExpenseItem>
  //           <ExpenseItem
  //       title={expense[3].title}
  //       amount={expense[3].amount}
  //       date={expense[3].date}
  //     ></ExpenseItem> */}
  //           <ExpenseItem
  //       expense={expense[0]}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       expense={expense[1]}
  //     ></ExpenseItem>
  //           <ExpenseItem
  //       expense={expense[2]}
  //     ></ExpenseItem>
  //           <ExpenseItem
  //       expense={expense[3]}
  //     ></ExpenseItem>
  //         </div>
  // );

}

export default App;
