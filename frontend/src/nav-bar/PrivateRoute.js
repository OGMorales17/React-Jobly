// import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { Route, Navigate, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

// const PrivateRoute = ({ exact, path, children }) => {
//     const currentUser = useContext(UserContext);

//     if (!currentUser) {
//         return <Navigate to="/login" />;
//     }

//     return (
//         <Route exact={exact} path={path}>
//             {children}
//         </Route>
//     );
// }

const PrivateRoute = () => {
    const auth = null;
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;