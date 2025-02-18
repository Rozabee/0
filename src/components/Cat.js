function Cat(props) {
//rule 
    return (
    <>
        <h3>{props.name}</h3>
        <p>Color : {props.color}</p>
        <p>Age : {props.age}</p>
        <p>Role : {props.role ? props.role : "No Role"}</p>
    </>
    )
}
// allows to Export the Employee component into other files 
export default Cat;