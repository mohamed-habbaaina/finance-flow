import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../Context/BudgetsContext'
import BudgetCard from './BudgetCard'

export default function UncategorizedBudgetCard(props) {
    const {budgets, getBudgetExpense} = useBudgets()
    const amount = getBudgetExpense(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)

    if(amount === 0){
        return null
    }
  return (
    <div className=''>
        <BudgetCard amount={amount} name ="Uncategorized"/>
      
    </div>
  )
}
