import { BrowserRouter ,Route , Routes} from "react-router-dom";
// import { Home } from "lucide-react";
import { NotFound } from "./pages/Notfound";
import { Home } from "./pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
