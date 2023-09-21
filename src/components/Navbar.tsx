import {Link} from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav className='flex w-full justify-between px-10 h-14 items-center bg-slate-800'>
            <div>
                <h1 className='font-bold text-2xl text-white'>E-Commerce</h1>
            </div>
            <div className='w-6/12 h-full flex items-center'>
                <input className='border w-11/12 h-3/6 px-1 rounded-l-md' type="text" placeholder='search'/>
                <button className='bg-neutral-700 h-3/6 px-3 text-white rounded-r-md'><FontAwesomeIcon className='duration-300 hover:scale-110' icon={faSearch}/></button>
            </div>
            <ul className='flex justify-self-end gap-10 text-lg text-white'>
                <li className='hover:text-xl duration-300'><Link to=''>Log in</Link></li>
                <li className='hover:text-xl duration-300'><Link to=''>Sign up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar