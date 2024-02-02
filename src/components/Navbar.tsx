import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Navbar as NextNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";

const Navbar = () => {
    return (
        <NextNavbar className='w-full justify-between px-10 h-14 items-center bg-slate-800 z-10'>
            <NavbarBrand>
                <h1 className='font-bold text-2xl text-white'>E-Commerce</h1>
            </NavbarBrand>
                <NavbarContent className='w-6/12 h-full flex items-center'>
                    <input className='border w-11/12 h-3/6 px-1 rounded-l-md' type="text" placeholder='search' />
                    <button className='bg-neutral-700 h-3/6 px-3 text-white rounded-r-md'><FontAwesomeIcon className='duration-300 hover:scale-110' icon={faSearch} /></button>
                </NavbarContent>
                <NavbarContent className='flex justify-self-end gap-10 text-lg text-white'>
                    <NavbarItem className='hover:text-xl duration-300'><Link to='/login'>Log in</Link></NavbarItem>
                    <NavbarItem className='hover:text-xl duration-300'><Link to=''>Sign up</Link></NavbarItem>
                </NavbarContent>
        </NextNavbar>
    )
}

export default Navbar