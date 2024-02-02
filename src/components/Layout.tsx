import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    Element: React.ComponentType
}

const Layout: React.FC<Props> = ({ Element }) => {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>

            {<Element />}
            <Footer />
        </div>
    )
}

export default Layout