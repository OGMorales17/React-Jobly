import * as React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../utilities/NotFound";


const NavRoutes = ({ login, signup }) => {

  return (
    <div className="pt-5">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />

        <Route path="/companies" element={<PrivateRoute><CompanyList /></PrivateRoute>} />
        <Route path="/jobs" element={<PrivateRoute><JobList /></PrivateRoute>} />
        <Route path="/companies/:handle" element={<PrivateRoute><CompanyDetail /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfileForm /></PrivateRoute>} />

        <Route path="/" />

      </Routes>
    </div>
  );
}

export default NavRoutes;
