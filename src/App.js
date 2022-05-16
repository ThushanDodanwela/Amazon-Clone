import "./App.css";
import react, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStatevalue } from "./StateProvider";

function App() {
  const [{}, disptch] = useStatevalue();

  useEffect(() => {
    //this will only run once when the app components load...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //user just logged in / was logged in
        disptch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        disptch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
