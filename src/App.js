
import { Routes, Route } from "react-router-dom";
import { Layot } from "./components/Layout";
import { Menu } from "./pages/menu";
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
            <Route path='about' element={<About/>}/>
            <Route path='/meal' element={<Meal/>}/>
        </Routes>
      </Layot>
    </Provider>
    
  )
}

export default App;
