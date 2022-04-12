import "./Home.css";
import React from "react";
import { useState } from "react";


function Home(){

    const storeItems = [{"id": 1, "name": "Shoe", "price": 79 }
    , {"id": 2, "name": "Jacket", "price": 200}, {"id": 3, "name": "Lakers Socks", "price": 44},
     {"id": 4, "name": "Gucci Pant", "price": 80}, {"id": 5, "name": "Sunglass", "price": 111 }]
const [kart, setKart] = useState([]);

// useEffect(() => {
// }, [kart] );

function addToKart(e){
    const itemToAdd = e.target.id;
     setKart([...kart, itemToAdd]);
     textInput.current.value = "";
     console.log(kart);
};
let textInput = React.createRef();

    return( 
        <div className="grid-container">
            <div className="grid1">
                <h1>GRID 1</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam hendrerit nisi sed sollicitudin pellentesque. Nunc 
                    posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique 
                    nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec 
                    a dui et dui fringilla consectetur id nec massa. Aliquam erat 
                    volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
                    Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
                    mattis at dui ac, convallis semper risus. In adipiscing ultrices 
                    tellus, in suscipit massa vehicula eu.”
                </p>
            </div>
            <div className="grid2">
                <h1>GRID 2</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam hendrerit nisi sed sollicitudin pellentesque. Nunc 
                    posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique 
                    nisl vitae volutpat. ”
                </p>
            </div>
            <div className="grid3">
                <h1>GRID 3</h1> 

                
            <h1>Hobbies Page</h1>
            <div>
                <h1>MY SHOPPING BASKET</h1>
                <ul>
                    {kart.map((item, index) => { console.log(item); 
                        return(<li key={index}>{item}</li>) })};
                </ul>
            </div>
            <h1>STORE ITEMS</h1>
            <input ref={textInput}></input>
            <button>Add</button>
            <ul >
                    {storeItems.map((item, index)=>{ return(
                    <li  key={index} >
                        <div>
                            <p id={item.name} onClick={addToKart} >{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    </li>)})};
            </ul>
            </div>
        </div>
)};
export default Home;