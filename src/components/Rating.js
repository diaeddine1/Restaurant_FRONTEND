

import React from 'react'
import { BsStar, BsStarFill,BsStarHalf } from "react-icons/bs";
export default function Rating(props) {
    const rating = props.rating;
   
    if(rating===0.0)
    {
        return(
            <BsStar/>
        )
    }
    else if(rating===0.5)
    {
        return(
            
            <BsStarHalf/>  
        )
    }
    else if(rating===1.0)
    {
        return(

            <>
            <BsStarFill/>
            
            </>
        )
    }
    else if(rating===1.5)
    {
        return(
            <>
            <BsStarFill/>
           
            <BsStarHalf/> 
            </>
        )
    }
    else if(rating===2.0)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
           
            </>
        )
    }
    else if(rating===2.5)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/> 
            </>
        )
    }
    else if(rating===3.0)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </>
        )
    }
    else if(rating===3.5)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/> 
            </>
        )
    }
    else if(rating===4.0)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </>
        )
    }
    else if(rating===4.5)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/> 
            </>
        )
    }
    else if(rating===5.0)
    {
        return(
            <>
            <BsStarFill/>
            <BsStarFill/>
           
            <BsStarFill/>
            <BsStarFill/>
            
            <BsStarFill/>
           
            </>
        )
    }
    

  

}
