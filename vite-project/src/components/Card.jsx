import { Children } from "react"

 export const Card = ({Children,className}) => {
  return (
    <div className={'bg-white rounded-2xl shadow-xl${className}'}>
        {Children}  
    </div>
  )
}

export const CardContent=({className , Children })=> {
     
    return(
        <div className={'p-6 ${className}'}>
             {Children}

        </div>
    )
}