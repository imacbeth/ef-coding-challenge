import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
 <ul>
   <li>
     <Link to="/word-table">Word Table</Link>
   </li>
   <li>
     <Link to="/word-cloud">Word Cloud</Link>
   </li>

 </ul>
);

export default NavBar;
