import { useState } from "react";

const Thirdcomponent = () => {
    
    
    // declare state variables 
    const  [number, setNumber]=useState(10)
    const  [marks, setMarks]=useState(38)

    // create function to update number 
    const updatenumber =()=>{
        setNumber(number*5)
    }
    // create function to update marks 
    const updatemarks =()=>{
        setMarks(100)
    }

    return(
        <div>
            <h1>Understanding React Hooks</h1>
            <h2>The current value is : {number}</h2>
            <button onClick ={updatenumber} >update the number</button>
            <h2>The current marks is : {marks}</h2>
            <button onClick={updatemarks} >update our marks</button>
        </div>
    )





}
export default Thirdcomponent