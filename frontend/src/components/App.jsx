import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Read from "./Read";

function App(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;