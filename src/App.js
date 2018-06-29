import React, { Component } from 'react';
import './style.css';

class App extends Component { 
  constructor() {   
    super();
    this.state = {
        arr: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos') //загрузка json
        .then(response => {
            return response.json();
        })
        .then(arr => {  //передача значений в массив
            this.setState({ arr });
        });
  }
 
 renderProducts() {
    return this.state.arr.map(arr => {
      if (arr.completed === true) {
        return (
            <li key={arr.Id} >
              <font className="flex-opacity"> 
                { arr.title }
              </font>
            </li>      
        );
      } else {
        return (
            <li key={arr.Id} >
              <font className="flex-element"> 
                { arr.title }
              </font>
            </li>      
        );
      }
    })
  }
   
  render() {
    return (
        <div>
          <ol  className='flex-container'>
            { this.renderProducts() }
           </ol> 
        </div>       
    );
  }
}

export default App;