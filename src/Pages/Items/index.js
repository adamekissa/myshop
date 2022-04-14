import React from "react";
import "./Items.css";
import { useState } from "react";

function Items(){

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

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

let textInput = React.createRef();

    return(<div>
<header>
  <h2>Cities</h2>
  
</header>

<section>
  <nav>
    <ul>
      <li><a href="#">London</a></li>
    </ul>
  </nav>
  
  <article>
    <h1>London</h1>
    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    <div className="popup">
                <h1>MY SHOPPING BASKET</h1>
                <button onClick={myFunction} className="button button2">{kart.length}</button>
                <span className="popuptext" id="myPopup">
    <ul>
        {kart.map((item, index)=> { return(<li key={index}>{item}</li>)})}
    </ul>
  </span>
                <h3>{kart.length} Items added to your Kart</h3>
                {/* <ul>
                    {kart.map((item, index) => { console.log(kart.length); 
                        return(<li key={index}>{kart.length} items added to your Kart</li>) })}
                </ul> */}
            </div>
            <h1>STORE ITEMS</h1>
            <input ref={textInput}></input>
            <button>Add</button>
            <ul >
                    {storeItems.map((item, index)=>{ return(
                    <li  key={index} >
                        <div>
                            <button id={item.name} onClick={addToKart} className="button button2">{item.name}</button>
                            {/* <p id={item.name} onClick={addToKart} >{item.name}</p>
                            <p>{item.price}</p> */}
                        </div>
                    </li>)})};
            </ul>
  </article>
</section>

<footer>
  <p>Footer</p>
</footer>
        </div>
    )
}

export default Items;