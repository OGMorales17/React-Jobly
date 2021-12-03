import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UserContext from "../auth/UserContext";
import "./NavBar.css";

function Navigation({ logout }) {
    const currentUser = useContext(UserContext)

    const loginUser = () => {
        return (
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/" onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </Link>
                </li>
            </ul>
        );
    }

    const logoutUser = () => {
        return (
            <ul class="navbar-nav">
                <li className="nav-item me-4">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" to="/signup">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        )
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <ul class="navbar-nav ms-4">
                    <li class="nav-item active">
                        <Link className="navbar-brand" to="/">
                            Jobly
                        </Link>
                    </li>
                </ul>
                <div class="ms-auto order-0">
                    <button class="navbar-toggler me-4" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        {currentUser ? loginUser() : logoutUser()}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
