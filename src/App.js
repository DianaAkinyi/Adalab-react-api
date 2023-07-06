import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import Login  from "./Login";
import Products from "./Products";

function App() {
  return (
    <div>
     {/* <Login/>
     <Products/> */}
     <BrowserRouter>
     <Routes>
<Link to = '.Login'>Login</Link>
<Link to = './Product' >Product</Link>
      <Route path ='/Login' element = {<Login/>}/>
      <Route path ='/Product' element ={<Products/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
