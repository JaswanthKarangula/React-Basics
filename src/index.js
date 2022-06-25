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




// const containerDivElementJSX = (

//     <div>

//       <h1 className="counter-display">0</h1>

//       <button>+</button>

//       <button>-</button>

//     </div>

//   )


// ReactDOM.render(containerDivElementJSX, document.querySelector("#root"));





class Counter extends React.Component {


    constructor(props) {

        super(props);

        this.state = {

            count: 0

        };

    }



    increaseCount = () => {

        this.setState((state, props) => {

            return { count: state.count + props.steps }

        });

    };


    decreaseCount = () => {

        this.setState((state, props) => {

            return { count: state.count - props.steps }

        });

    };




    render() {

        return (
            <div>
                <h1 className="counter-display">{this.state.count}</h1>
                <button onClick={this.increaseCount}>+{this.props.steps}</button>
                <button onClick={this.decreaseCount}>-{this.props.steps}</button>
            </div>
        )
    }
}

// ReactDOM.render(<Counter />, document.querySelector("#root"));



class App extends React.Component {

    render() {
  
      return (
  
  <div>
  
              <Counter steps={1}/>
  
              <Counter steps={10}/>
  
          </div>
  
       )
  
    }
  
  }


  
  

  ReactDOM.render(<App/>, document.querySelector("#root"));