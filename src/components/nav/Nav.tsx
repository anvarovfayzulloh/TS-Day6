import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="min-w-[256px] h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg">
            <ul className="flex flex-col p-4 space-y-4">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'flex items-center p-2 text-blue-400 bg-gray-800 rounded-lg transition-all duration-300' : 'flex items-center p-2 text-white hover:text-blue-100 hover:bg-gray-600 rounded-lg transition-all duration-300' }end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/create" className={({ isActive }) => isActive ? 'flex items-center p-2 text-blue-400 bg-gray-800 rounded-lg transition-all duration-300' : 'flex items-center p-2 text-white hover:text-blue-100 hover:bg-gray-600 rounded-lg transition-all duration-300' } >
                        Create
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
