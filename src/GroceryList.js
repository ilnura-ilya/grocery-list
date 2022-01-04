import {Component} from 'react';
import cart from './cart.png'

export class GroceryList extends Component {
 state ={
    userInput: "",
    groceryList: []
   }

onChangeEvent (e){
      //1console.log(e.target.value);
      this.setState({userInput: e})
      //2console.log(e);
}

addItem(input){
   if(input === ''){
      alert('Please enter an item')
   } else {
   let listArray = this.state.groceryList;
   listArray.push(input);
   this.setState({groceryList: listArray, userInput: ''})
  // console.log(listArray);

   }
   
}

crossedWord(event){
   const liItems= event.target;
   liItems.classList.toggle('crossed')
}

deleteItem(){
   let listArray = this.state.groceryList;
   listArray = [];
   this.setState({groceryList: listArray})
}

onFormSubmit(e){
   e.preventDefault(e)
}

render () {
   return (
      <div>
         <form onSubmit = {this.onFormSubmit}>
      <div className='container'>
         <input placeholder="What to Buy" type="text" 
        // onChange={this.onChangeEvent}
        onChange={(e) => {this.onChangeEvent(e.target.value)}}
         value={this.state.userInput}/>
      </div>

      <div className='container'>
           <button className="btn add"   onClick ={() => this.addItem(this.state.userInput)}>ADD</button> 
      </div>

      <div className='container'>
           <ul>
             {this.state.groceryList.map((item, index) => <li onClick = {this.crossedWord} key={index}> <img src={cart} width="40px" alt="checkBox"/>{item}</li>)} 
           </ul>
      </div>

      <div className='container'>
              <button className="btn delete" onClick = {() => this.deleteItem()}>DELETE</button>
      </div>
      </form>
      </div>
       
   )
}
}