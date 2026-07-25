import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>base page</div>} />
          <Route path="/login" element={<div>login page</div>} />
          <Route path="/test" element={<div>test page</div>} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <h1>devCircle</h1>
    </>
  )
}

export default App
