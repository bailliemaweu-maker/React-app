import { use, useState } from "react";


const Thirdcomponent = () => {
    
    
    // declare state variables 
    const  [number, setNumber]=useState(10)
    const  [marks, setMarks]=useState(38)
    const [school, setSchool]=useState("MODCOM")
    const [name, setName]=useState("Joanna")
    const [city, setCity]=useState("Kigali")
    const [age, setAge]=useState(16)

    // create function to update number 
    const updatenumber =()=>{
        setNumber(number*5)
    }
    // create function to update marks 
    const updatemarks =()=>{
        setMarks(100)
    }
    // create function to update school
    const updateschool =()=>{
        setSchool("Nairobi Univesity")
    }
    // create function to update school
    const updatename =()=>{
        setName("Billy")
    }

    // create function to update city 
    const updatecity=()=>{
        setCity("Nairobi")
    }

    // create function to update age
    const updateage=()=>{
        setAge(20)
    }



    return(
        <div>
            <h1>Understanding React Hooks</h1>
            <h2>The current value is : {number}</h2>
            <button onClick ={updatenumber} >update the number</button>

            <h2>The current marks is : {marks}</h2>
            <button onClick={updatemarks} >update our marks</button>

            <h2>The current school is : {school} </h2>
            <button onClick={updateschool} >update our school</button>


            <h3>The current name :{name}</h3>
            <button onClick={updatename} >update our name</button>

            <h3>The current city is : {city}</h3>
            <button onClick={updatecity} >update our city</button>

            <h3>The current age is : {age}</h3>
            <button onClick={updateage} >update our age</button>



        </div>
    )





}
export default Thirdcomponent