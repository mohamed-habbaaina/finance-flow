import { useRef } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../Context/BudgetsContext"
export default function AddExpenseModal({ defaultBudgetId }) {
  
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()

  const {addExpense, budgets} = useBudgets()


  function handleSubmit(e){
    e.preventDefault()
    addExpense({
      description:descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId:budgetIdRef.current.value,

    })
   
  }
  return (
    <div >

        <form action="" onSubmit={handleSubmit}>
            <header>
              <span>New Expense</span>
            
            </header>

            <label htmlFor="description">Description</label>
            <input type="text" name="description"  ref={descriptionRef} required  controlId="description"/>

            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" ref={amountRef}  required controlId="amount" min={0} step ={0.01}/>

            <label htmlFor="maximum">Budget</label>
            <select type="number" defaultValue={defaultBudgetId} ref={budgetIdRef}>
                <option value={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                {budgets.map(budget => (
                        <option key={budget.Id} value = {budget.id}>{budget.name}</option>
                ))}
                
            </select> 
            

            <button type="submit">Add</button>
        </form>
      
    </div>
  )
}
