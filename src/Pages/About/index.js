import "./About.css";
import pic from "../../images/hi.JPG";


function About(){
    return(
        <div>
            <div className="header">
  <h1>ADAM MOHAMMED</h1>
</div>

<div className="row">
  <div className="col-3 col-s-3 menu">
    <ul>
      <li> CV </li>
      <li> Portfolio </li>
      <li> Experience </li>
      <li> Contact Me </li>
    </ul>
  </div>

  <div className="col-6 col-s-9">
    <h1>About Me</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
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

  <div className="col-3 col-s-12">
    <div className="aside">
      <h2>What?</h2>
      <p>Chania is a city on the island of Crete.</p>
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
      <img id="img" src={pic}/>
    </div>
  </div>
</div>

<div className="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>
        </div>
    )
}

export default About;