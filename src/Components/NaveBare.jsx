import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NaveBare() {
  return (
   
            <div className='navebare drop-shadow-2xl'>
                <NavLink to="/"><button className="material-symbols-rounded">home</button></NavLink>
                <NavLink to="/addBudget"><button className="material-symbols-rounded">wallet</button></NavLink>
                <NavLink to="/addExpense"><button className="material-symbols-rounded">move_up</button></NavLink>
                <NavLink to="/summary"><button className="material-symbols-rounded">finance</button></NavLink>
            </div>
   
  )
}
