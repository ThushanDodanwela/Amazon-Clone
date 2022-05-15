import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                {" "}
                <Header />
                <h1>Hello MFs!!!!!!!</h1>{" "}
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                {" "}
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
