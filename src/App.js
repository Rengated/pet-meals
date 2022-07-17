
import { Routes, Route } from "react-router-dom";
import { Layot } from "./components/Layout";
import { Menu } from "./pages/menu";
import {Cart} from './pages/cart'
import {About} from './pages/about'
import { Meal } from "./pages/meal";
import { Provider } from "react-redux";
import {store} from './redux/store'

function App() {
  
  return (
    <Provider store={store}>
      <Layot>
        <Routes>
            <Route path="/" element={<Menu />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/meal' element={<Meal/>}/>
            <Route path='/cart' element={<Cart/>}/> 
        </Routes>
      </Layot>
    </Provider>
    
  )
}

export default App;
