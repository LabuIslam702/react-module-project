import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai';

import Link from "../Link/Link";
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/dashboard', name: 'Dashboard', id: 1 },
        { path: '/profile', name: 'Profile', id: 2 },
        { path: '/settings', name: 'Settings', id: 3 },
        { path: '/about', name: 'About', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 },

    ]

    return (
        <nav>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                   open === true ? 
                   <AiOutlineClose className='text-2xl'></AiOutlineClose> 
                    : <AiOutlineMenu className='text-2xl '></AiOutlineMenu>
                }
                
            </div>
            <ul className="md:flex ml-7 mt-3 text-3xl font-medium text-center   ">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};



export default NavBar;