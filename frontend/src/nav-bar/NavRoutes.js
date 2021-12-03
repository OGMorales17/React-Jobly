// import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Homepage from "../homepage/Homepage";
// import CompanyList from "../companies/CompanyList";
// import JobList from "../jobs/JobList";
// import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
// import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
// import PrivateRoute from "./PrivateRoute";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

const NavRoutes = ({ login, signup }) => {

  return (
    <div className="pt-5">
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        {/* <PrivateRoute path="/companies" element={<CompanyList />} /> */}
        {/* <PrivateRoute path="/jobs" element={<JobList />} /> */}
        {/* <PrivateRoute path="/companies/:handle" element={<CompanyDetail />} /> */}
        {/* <PrivateRoute path="/profile" element={<ProfileForm />} /> */}
        {/* <Navigate to="/" /> */}
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default NavRoutes;
