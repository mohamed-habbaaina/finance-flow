import { currencyFormatter } from "../Utils"
import { NavLink } from "react-router-dom"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";

export default function BudgetCard({name,amount,max,hideButtons,hidetrash}) {

    const ClassName = [] 
        if(amount > max){
            ClassName.push("category")
        }else if(name === 'Total'){
            ClassName.push("Total")
        }else{
            ClassName.push("grayBlur")
        }
   




        
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
      

  return (
    <div className={ClassName.join("")}>
                    <div className="flex flex-row items-center justify-between p-1">
                        <div className=" text-2xl font-bold text-blue-800" >{name}</div>
                        {!hidetrash && (<div className=" w-7 h-7 material-symbols-rounded flex flex-row items-center justify-center cursor-pointer rounded-3xl drop-shadow-2xl hover:bg-[#e289605d]">delete</div>)}
                    </div>

                    <div className=" text-end text-md font-light">
                        <span>{currencyFormatter.format(amount)}</span>
                        {max && (<span>/ {currencyFormatter.format(max)}</span>)}
                    </div>
                

            
                {!hideButtons && (
                <div className='w-full h-auto flex flex-row items-center justify-center space-x-10 truncate text-xs'>
                    <NavLink to="/addExpense" ><Button variant="contained">Add Expenses</Button></NavLink>
                    <Button variant="contained" onClick={handleOpen}>View expense</Button>
                    
                    <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">

                            <Box className ='w-[390px] h-auto mt-20 p-4 rounded-xl drop-shadow-2xl bg-white'>
                             <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                
                                <div>{name}</div>
                                <div>
                                    <span>{currencyFormatter.format(amount)}</span>
                                    {max && (<span>{currencyFormatter.format(max)}</span>)}
                                </div>

                            </Typography>
                            </Box>
                     </Modal>
                </div>)}
      
    </div>
  )
}
