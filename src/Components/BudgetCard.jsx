import { currencyFormatter } from "../Utils"
export default function BudgetCard({name,amount,max,hideButtons}) {

    const ClassName = [] 
        if(amount > max){
            ClassName.push("category")
        }else{
            ClassName.push("grayBlur")
        }
        
    
  return (
    <div className={ClassName.join("")}>
                <div>
                    <div>{name}</div>
                    <div>
                        <span>{currencyFormatter.format(amount)}</span>
                        {max && (<span>{currencyFormatter.format(max)}</span>)}
                    </div>
                </div>

            
                {!hideButtons && (<div>
                    <button>Add expense</button>
                    <button>View expense</button>
                </div>)}
      
    </div>
  )
}
