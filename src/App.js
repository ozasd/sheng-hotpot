import './App.css';
import {Routes,Route} from 'react-router-dom'
// import {Error404} from "./404";
import {Nav,Home} from "./view/Home"
import {About} from "./view/About"
import {Delivery} from "./view/Delivery"
import {Reserve} from "./view/Reserve"

import {Menu} from "./view/Menu"

function App() {
  return (
    <>
    <Routes>
      <Route  element={<Nav/>}>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/Reserve' element={<Home/>}></Route> */}
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/Delivery' element={<Delivery/>}></Route>
        <Route path='/Reserve' element={<Reserve/>}></Route>
      </Route>
     

    </Routes>

    </>
  );
}

export default App;
