import { useRef } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../Context/BudgetsContext"
import Params from "./Params"
import { useNavigate } from "react-router-dom"
export default function AddExpenseModal({title, children , defaultBudgetId }) {
  
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const {addExpense, budgets} = useBudgets()
  const navigate = useNavigate()


  function handleSubmit(e){
    e.preventDefault()
    addExpense({
      description:descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId:budgetIdRef.current.value,
    })

    navigate('/')
   
  }
  return (
    <>
    <Params title= 'here you can add expense to each budget'></Params>
        <div className=" flex flex-col w-full h-fit m-auto">

            <form action="" onSubmit={handleSubmit} className='formAddBudget w-10/12 h-fit place-self-center grow relative flex flex-col rounded-xl bg-[#edf7fc5b] drop-shadow-2xl space-y-2 !overflow-y-scroll !overflow-x-hidden'>
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

      
    
    </>
  )
}
