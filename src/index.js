import './index.css';

import React from "react";

import ReactDOM from "react-dom";


// const reactElement = React.createElement("h1",null,"From React");
// console.log(reactElement);
// ReactDOM.render(reactElement,document.querySelector("#root"));




// const counterDisplayElement = React.createElement("h1", {className: "counter-display"}, 0);

// const incrementButtonElement = React.createElement("button", null, "+");

// const decrementButtonElement = React.createElement("button", null, "-");

// const containerDivElement = React.createElement("div", null, [counterDisplayElement, incrementButtonElement, decrementButtonElement]);


// console.log(containerDivElement);





// const counterDisplayElementJSX = (<h1 className="counter-display">0</h1>)
// const incrementButtonElementJSX = (<button>+</button>);
// const decrementButtonElementJSX = (<button>-</button>);
// const containerDivElementJSX = (<div>{[counterDisplayElementJSX, incrementButtonElementJSX, decrementButtonElementJSX]}</div>);




const containerDivElementJSX = (

    <div>
  
      <h1 className="counter-display">0</h1>
  
      <button>+</button>
  
      <button>-</button>
  
    </div>
  
  )
  

ReactDOM.render(containerDivElementJSX, document.querySelector("#root"));
