import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../Context/BudgetsContext"
export default function ViewExpensesModal() {
  
  const [getBudgetExpense,budgets,deleteBudget,deleteExpense] = useBudgets()
  
  const budget = UNCATEGORIZED_BUDGET_ID === budgets.iD?{name: "Uncategorized",id:UNCATEGORIZED_BUDGET_ID}:budgets.find(b => b.id === budgets.id)
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <header>
              <span>Expenses - {budget.name}</span>
              {budget.id != UNCATEGORIZED_BUDGET_ID &&(
                  <button onClick={() => deleteBudget(budget
                    )}>Delete</button>

              )}
            
            </header>

            <label htmlFor="name">Name</label>
            <input type="text" name="name"  ref={nameRef} required  controlId="name"/>

            <label htmlFor="maximum">Maximum</label>
            <input type="number" name="maximum" ref={maxRef}  required controlId="max" min={0} step ={0.01}/>
            <button type="submit">Add</button>
        </form>
      
    </div>
  )
}
