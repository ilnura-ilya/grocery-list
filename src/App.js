
import './App.css';
import image from './shopping-211128-142332.jpg';
import imageTwo from './man-211128-142332.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
       <div className='container'>
       <img src={ image } width="180px" alt="shopping"/>
       </div>
       <div className='container'>
       <h1>Grocery List</h1>
       </div>
       <GroceryList/>
       <div className='container'>
       <img src={ imageTwo } width="180px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
