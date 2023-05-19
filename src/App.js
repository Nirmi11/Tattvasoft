
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Productlist from './pages/Productlist';

function App() {
  return (
    <>
    <h1>hello world</h1>
      {/* <Register/>
      <Login/>
      <Productlist/> */}
      <BrowserRouter>
      <Routes>
        <Route  path="/login" Component={Login}/>
        <Route  path="/register" Component={Register}/>
        <Route  path="/" Component={Login}/>

        
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
