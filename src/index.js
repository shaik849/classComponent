import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('app'));


function unmount(){
    root.render(
    <div>
        <h1>Component is unmounted</h1>
        <button onClick={remount}>reMount</button>
    </div>
    )
}

function remount(){
root.render(<ClassComp name ='sanam' age={22} />)
}

class ClassComp extends Component {
    constructor(props){
       super(props);
       this.state = { count : 10}
       console.log("constructor called");
    }

    increment = () =>{
    this.setState({ count : this.state.count + 1})
    // this.state.count += 1;
//   root.render(<ClassComp />)
    }

  render() {
   const {name, age} = this.props;
    return (
      <div>
        <h1>Name : {name} and Age : {age} </h1>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={unmount}>umMount</button>
      </div>
    );
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(prevProp, prevState){
    console.log(prevProp, prevState)
    console.log(this.props, this.state)
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    // root.render(this.unmount)
    console.log("componentWillUnmount")
  }
}

root.render(React.createElement(ClassComp, {name : 'sanam', age :22}))
// root.render(<ClassComp />, {name : 'sanam', age :22});