import { useRef, useEffect } from "react"
import { useBudgets } from "../Context/BudgetsContext"
import Params from "./Params"
import NaveBare from "./NaveBare"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';







export default function AddBudgetModal({title, children}) {
  
  const nameRef = useRef()
  const maxRef = useRef()
  const {addBudget} = useBudgets()
  const navigate = useNavigate();
  

  function handleSubmit(e){
    e.preventDefault()
    addBudget({
      name:nameRef.current.value,
      max:parseFloat(maxRef.current.value)
    })   
    navigate('/')
    // window.location.href = '/'
  }

  


  return (
  <>
          <Params title='here you can add a new budget'></Params>
             <div  className="flex flex-col w-full h-fit m-auto">
              <form onSubmit={handleSubmit}  className='formAddBudget w-10/12 h-fit place-self-center grow relative flex flex-col rounded-xl bg-[#edf7fc5b] drop-shadow-2xl space-y-2 !overflow-y-scroll !overflow-x-hidden'>
                  <header>
                    <span>New Budget</span>
                  
                  </header>

                  <label htmlFor="name">Name</label>
                  <input type="text" name="name"  ref={nameRef} required  controlId="name"/>

                  <label htmlFor="maximum">Maximum</label>
                  <input type="number" name="maximum" ref={maxRef}  required controlId="max" min={0} step ={0.01}/>
                  <Button className="mt-4" variant="contained" type="submit">Add</Button>
              </form>
             </div>
          
  </>
  
  )
}
