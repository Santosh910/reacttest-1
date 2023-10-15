
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import GlobalContext from './component/context/GlobalContext';
import Products from './component/Products';
import SingleProduct from './component/SingleProduct';
import CounterReducer from './component/CounterReducer';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/globalContext' element={<GlobalContext/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/counter-reducer' element={<CounterReducer/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
