import React, { useState } from 'react';
import BudgetCard from './Components/BudgetCard';
import AddBudgetModal from './Components/AddBudgetModal';
import AddExpenseModal from './Components/AddExpenseModal';
import { useBudgets } from './Context/BudgetsContext';
import './App.css';
import UncategorizedBudgetCard from './Components/UncategorizedBudgetCard';
import TotalBudgetCard from './Components/TotalBudgetCard';



function App() {

    const {budgets, getBudgetExpense} = useBudgets()


  return (
    <>
      <div>
        <section>
            <div className='frame'>
               <div className='screen'>
                        {/* device base elements */}
                        <div className='device'>
                              <div className='face'><div className='eyes'></div></div>

                              <span className="material-symbols-rounded">wifi</span>
                              <span className="material-symbols-rounded">signal_cellular_alt</span>
                              <span className="material-symbols-rounded">battery_full</span>
                              <span>12:30</span>
                        </div>
                        {/* here the main page */}

                          <div>
                                <h1>budgets</h1>
                                <button>Add budget</button>
                                <button>Add Expense</button>
                          </div>
                          <TotalBudgetCard/>
                           <UncategorizedBudgetCard/>
                          <div className='budget'>
                                {budgets.map(budget => {
                                    const amount = getBudgetExpense(budget.id).reduce((total, expense) => total + expense.amount, 0)
                                  return(
                                            <BudgetCard 
                                            key={budget.id}
                                            name={budget.name} 
                                            amount={amount} 
                                            max={budget.max}
                                            />
                                        )
                              })}
                          </div>

                      <AddBudgetModal />

                      <AddExpenseModal  />

               </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default App;
