// import { FaSpinner } from 'react-icons/fa';
// import "./Loading.css";

// /** Loading message used by components that fetch API data. */

// const Spinner = () => {
//     return (
//         <div className="Spinner">
//             <FaSpinner icon="spinner" className="spinner" />
//         </div>
//     );
// }

// export default Spinner;

import React from "react";
import "./Loading.css";

/** Loading message used by components that fetch API data. */

function Loading() {
    return (
        <div className="Loading">
            Loading ...
        </div>
    );
}

export default Loading;