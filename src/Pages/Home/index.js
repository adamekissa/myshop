import "./Home.css";


function Home(){
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
            <div className="grid3"><h1>GRID 3</h1> </div>
            {/* <div className="grid4"><h1>GRID 4</h1> </div> */}
        </div>
)};
export default Home;