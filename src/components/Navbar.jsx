import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="relative inline-block">
            <button className="button-home text-white" role="button">
                Home
            </button>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                Projects
            </NavLink>
            <NavLink to="/CC" className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
                &#40;CC&#41;
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar