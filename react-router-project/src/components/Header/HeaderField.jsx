import { NavLink } from "react-router";

export default function HeaderField({ to = "", label = "" }) {
  return (
    <NavLink
      to={to}
      // NavLink gives us `isActive`. We use it to change color if we are on that page.
      className={
        ({ isActive }) =>
          isActive
            ? "text-orange-700 underline underline-offset-4" // Active Style
            : "text-gray-700 hover:text-orange-700 transition" // Inactive Style
      }
    >
      {label}
    </NavLink>
  );
}
