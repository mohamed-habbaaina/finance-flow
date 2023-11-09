import { useBudgets } from "../Context/BudgetsContext"
export default function ViewExpensesModal() {
  
  const [getBudgetExpense,]
  
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <header>
              <span>New Budget</span>
            
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
