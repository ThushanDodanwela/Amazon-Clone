import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/Login"
            element={
              <>
                {" "}
                <Login />{" "}
              </>
            }
          ></Route>
          <Route
            path="/Checkout"
            element={
              <>
                <Header /> <Checkout />{" "}
              </>
            }
          ></Route>

          {/* Defalut route should be in the last */}
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />{" "}
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
