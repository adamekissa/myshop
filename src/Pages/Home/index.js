import "./Home.css";
import React from "react";
import { useState } from "react";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

                
            <p className="text-center mt-3">Home</p>
            <Row className="mx-0">
                <Button as={Col} variant="primary">Button #1</Button>
                <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                <Button as={Col} variant="success">Button #3</Button>
            </Row>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
</div>
            </div>

        </div>
)};
export default Home;