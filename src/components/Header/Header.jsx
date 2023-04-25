import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <>
         <nav>
            <Link to="/login">Log In</Link>
         </nav>
      </>
   );
};

export default Header;
