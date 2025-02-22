import EditCat from "./EditCat";

function Cat(props) {
//rule 
return (
    <div class=" min-w-[350px] max-w-[350px] m-2 py-8 px-8 space-y-2 rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">

    <img class="object-cover rounded-full h-[100px] w-[100px] shadow-lg block mx-auto sm:mx-0 sm:shrink-0" src={props.img} alt="cat" />

    <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-pink-500 font-bold">
                {props.name}
            </p>
            <p class="text-slate-500 font-medium">
                Age : {props.age}
            </p>
       
        </div>

        <EditCat name={props.name} age={props.age}/>
        
    </div>
    <hr/>
    </div>
)
}
// allows to Export the Employee component into other files 
export default Cat;