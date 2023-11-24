import React from 'react'
import Params from './Params'
import { NavLink } from 'react-router-dom'
export default function Menu(title,symbol, children) {
  return (
    <>
        <Params symbol='arrow_back'></Params>
        <div className=''>
            this is for the menu
        </div>
    </>
  )
}
