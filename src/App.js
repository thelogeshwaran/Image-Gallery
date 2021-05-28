import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/Common/NavBar/NavBar";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { useTheme } from "./Context/ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/Config";
import { useUser } from "./Context/UserContext";

function App() {
  const { setUser } = useUser();
  const [userProfile] = useAuthState(auth);
  setUser(userProfile);
  const { dark } = useTheme();

  return (
    <div
      className="App"
      style={
        dark
          ? { backgroundColor: "#9FA7AB", color: "white" }
          : { color: "black", backgroundColor: "white" }
      }
    >
      <div>
        <ToastContainer limit={2} />

        <BrowserRouter>
          <div>
            <NavBar />

            <div className="content">
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
