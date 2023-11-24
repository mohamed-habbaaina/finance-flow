import React from 'react'
import { useBudgets } from '../Context/BudgetsContext'
import BudgetCard from './BudgetCard'

export default function TotalBudgetCard(props) {
    const {budgets, expenses} = useBudgets()
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
    const max = budgets.reduce((total, budgets) => total + budgets.max, 0)


    if(max === 0){
        return null
    }
  return (
    <div className='sticky top-0 left-0 right-0 z-10 w-full h-20  bg-[#cbd3dfd2]  rounded-xl  drop-shadow-2xl'>
        <BudgetCard amount={amount} name ="Total" max={max} hideButtons hidetrash/>
    </div>
  )
}
