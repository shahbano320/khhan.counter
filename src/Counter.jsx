import { useState } from "react";
import "./Counter.css";
function Counter(){
const[book,setBook] =useState(0);
return (
    <div>
   <h1>My fist Counter App</h1>
   <h2>{book}</h2>


<button onClick={()=> setBook(book+ 1)}>  My counter in increase
    </button>
<button onClick={()=> able > 0&& setBook(book -1)}>My counter in  decreaes

</button>
<button onClick={()=>setBook(0)}>
reset
</button>
    </div>
 );
}

export default Counter;