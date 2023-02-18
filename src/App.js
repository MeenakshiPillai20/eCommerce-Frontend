import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
// import Items from './pages/Items';
import Cart from './pages/Cart';
import Fiction from './pages/Fiction';
import NonFiction from './pages/NonFiction';
import Classics from './pages/Classics';
import Academics from './pages/Academics';



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/items' element={<Items/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/fiction/:pid' element={<Fiction/>}/>
          <Route path='/non-fiction/:pid' element={<NonFiction/>}/>
          <Route path='/classics/:pid' element={<Classics/>}/>
          <Route path='/academics/:pid' element={<Academics/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
