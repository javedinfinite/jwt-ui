import React from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MyAppbar from "./components/Appbar";
import PrivateRoute from "./Privateroute";
import { AuthProvider } from "./context/AuthContext";
import { AuthWrapper } from "./AppWrapper";
import TopNHackers from "./components/tophackers";
import { ErrorBoundary } from "./ErrorBoundary";
import NotFound from "./NotFound";

const App = () => {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <AuthWrapper>
        <div className="App">
          <HashRouter>
            <MyAppbar />
            <header className="App-header">
              <Routes>
                <Route exact path="/tophackers" element={<PrivateRoute />}>
                  <Route exact path="/tophackers" element={<TopNHackers />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="*" element={<NotFound />} />
              </Routes>
            </header>
          </HashRouter>
        </div>
      </AuthWrapper>
    </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
