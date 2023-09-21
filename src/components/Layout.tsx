import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    Element: React.ComponentType
}

const Layout: React.FC<Props> = ({ Element }) => {
    return (
        <div>
            <Navbar />
            {<Element />}
            <Footer />
        </div>
    )
}

export default Layout