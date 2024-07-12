import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter  basename="/new-profile/">
        <Routes>
          <Route path="/" element={<div>hello home
            <Link className="text-blue-500" to={'/about'}>About</Link>
          </div>} /> 
          <Route path="/about" element={<div>hello About
            <Link className="text-blue-500" to={'/'}>home</Link>
          </div>} /> 
        </Routes>
      </BrowserRouter>
    );
  }