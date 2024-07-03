
import About from "./components/About";
import {Home} from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/SignUp";


function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Alert message="Hi hello"/>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element ={<Login/>}></Route>
          <Route path="/signup" element = {<Signup/>}/>
        </Routes>
        </div>

      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
