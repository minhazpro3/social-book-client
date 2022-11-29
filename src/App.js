import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Forget from "./pages/Forget";

import Home from "./pages/Home";
import { Login } from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

import useFirebase from "./Hooks/useFirebase";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <useFirebase>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="register" element={<Register />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="forget-password" element={<Forget />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </useFirebase>
  );
}

export default App;
