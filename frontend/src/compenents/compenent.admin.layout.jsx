import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout(){
       return(
              <>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                     <div className="container-fluid">
                            <ul className="navbar-nav">
                                   <li>
                                          <NavLink className={"nav-link"} to={"/home"}> Home </NavLink>
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to={"/products"}> produits </NavLink>
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to={"/categories"}> Categories </NavLink>
                                   </li> 
                                   <li>
                                          <NavLink className={"nav-link"} to={"/contact"}> Contacts </NavLink>
                                   </li>
                                   <li>
                                          <NavLink className={"nav-link"} to={"/login"}> Connexion </NavLink>
                                   </li>       


                            </ul>

                     </div>
              </nav>
              <div>
              <Outlet/>
              </div>
              
              </>
       )
}

