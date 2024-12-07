import { Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./Components/loginSignup/SignUp";
import NoteFoundPage from "./Components/NotFoundPage";
import Home from "./Components/home/Home";
import Cart from "./Components/cart/Cart";
import PrivateRoute from "./Components/loginSignup/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/Quiz' element={<PrivateRoute><Cart /></PrivateRoute>} /> */}
        <Route path='*' element={<NoteFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
