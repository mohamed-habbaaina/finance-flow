import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Params({title,symbol}) {

const link = "/menu"


  return (
    <>
            <div className='params'>
                <NavLink to={link}><button className="material-symbols-rounded text-4xl text-black rounded-[50%]">{symbol ??'menu'}</button></NavLink>
                <NavLink to="/profile"><button className="material-symbols-rounded text-4xl text-black rounded-[50%]">person</button></NavLink>
            </div>

            <p>{title ?? 'here you can view ,overview your budgets'}</p>
    </>
   
  )
}
