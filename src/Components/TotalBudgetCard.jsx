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
    <div>
        <BudgetCard amount={amount} name ="Total" max={max} hideButtons />
      
    </div>
  )
}
