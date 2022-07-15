
import { Routes, Route } from "react-router-dom";
import { Layot } from "./components/Layout";
import { Menu } from "./pages/menu";


function App() {
  
  return (
    <Layot>
      <Routes>
          <Route path="/" element={<Menu />}/>
      </Routes>
    </Layot>
    
  )
}

export default App;
