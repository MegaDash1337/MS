import Register from "./Pages/Register/Register.jsx";
import Main from "./Pages/Main/Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="register/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
