function Cat(props) {
//rule 
return (
    <div class="m-2 py-8 px-8 max-w-sm space-y-2 bg-#1d1c1b rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">

    <img class="object-cover rounded-full h-[100px] w-[100px] shadow-lg block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="cat" />

    <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-white font-semibold">
                {props.name}
            </p>
            <p class="text-slate-500 font-medium">
                Age : {props.age}
            </p>
       
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Edit
        </button>
    </div>
    <hr/>
    </div>
)
}
// allows to Export the Employee component into other files 
export default Cat;