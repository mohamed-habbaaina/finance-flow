import React, { useState } from 'react';
import BudgetCard from './BudgetCard';
import { useBudgets } from '../Context/BudgetsContext';
import { NavLink } from 'react-router-dom';
import UncategorizedBudgetCard from './UncategorizedBudgetCard';
import TotalBudgetCard from './TotalBudgetCard';
import Params from './Params';
import Button from '@mui/material/Button';
import NaveBare from './NaveBare';




 export default function Home({title, children}) {

    const {budgets, getBudgetExpense} = useBudgets()


  return (
        <div className="Home flex flex-col w-full h-full">
            <Params title='here you can add a new budget' />
                          <h2 className='text-center'>Finance flow Budgets</h2>
                          <div className='w-full h-16 p-4 flex flex-row items-center justify-center space-x-10'>
                                
                                <NavLink to="/addBudget"><Button variant="contained">Add Budget</Button></NavLink>
                                <NavLink to="/addExpense" ><Button variant="contained">Add Expenses</Button></NavLink>
                          </div>
                          <div className ='Content  '>
                          <TotalBudgetCard/>
                   

                              <div className='w-full flex-1 bg-white drop-shadow-2xl flex flex-col space-y-2 mb-2 rounded-xl p-2'>
                                    {budgets.map(budget => {
                                          const amount = getBudgetExpense(budget.id).reduce((total, expense) => total + expense.amount, 0)
                                    return(
                                                <BudgetCard 
                                                key={budget.id}
                                                name={budget.name ?? 'bdget name'} 
                                                amount={amount ?? '0'} 
                                                max={budget.max ?? '0'}
                                                />
                                          )
                                    })}
                              </div>
                              {/* <NaveBare/> */}
                          </div>
        </div>

  )

  
}

