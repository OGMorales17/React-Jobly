import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";


const NavRoutes = ({ login, signup }) => {

  return (
    <div className="pt-5">
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        {/*
        <Route element={<PrivateRoute />}>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/profile" element={<ProfileForm />} />
        </Route>
        <Route path="/" />
        <Route path="/" /> */}

        {/* <PrivateRoute exact path="/companies" element={<CompanyList />} />
        <PrivateRoute exact path="/jobs" element={<JobList />} />
        <PrivateRoute exact path="/companies/:handle" element={<CompanyDetail />} />
        <PrivateRoute path="/profile" element={<ProfileForm />} />
        <Navigate to="/" /> */}

      </Routes>
    </div>
  );
}

export default NavRoutes;












/*

         <Route
          path="/companies"
          element={
            <PrivateRoute>
              <CompanyList />
            </PrivateRoute>
          } />
        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <JobList />
            </PrivateRoute>
          } />
        <Route
          path="/companies/:handle"
          element={
            <PrivateRoute>
              <CompanyDetail />
            </PrivateRoute>
          } />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          } />

*/