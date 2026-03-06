const Secondcomponent =() =>{

    // Here is were we declare our variables 
    let message = "I love programming"
    let age = 32
    let classA = "Jupiter"
    let classB = "Earth"
    let classC = "North"
    let classD = "Moon"

    return(
        <div>
            <h1>Understanding variables in ReactJS</h1>
            {/* bind message variable  */}
            <h2>{message}</h2>

            {/* bind age variable  */}
            <p>Duke will be {age} years old this year</p>

            {/* bind class variable  */}
            <p>Nelson is in class {classA} </p>
            <p>Muller is in class {classB} </p>
            <p>Nicole is in class {classC} </p>
            <p>Mitchelle is in class {classD} </p>
        </div>
    )    
}
export default Secondcomponent