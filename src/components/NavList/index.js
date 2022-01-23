import { NavLink } from "react-router-dom";

import "./NavList.css";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  const activeClassName = "active-link";
  const inactiveClassName = "inactive-link";

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList