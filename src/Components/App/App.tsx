import "./App.css";
import React from "react";
import Signup from "../Signup/Signup";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__main-container">
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Dashboard />} />
                            </Route>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
        </div>
    );
}

export default App;
