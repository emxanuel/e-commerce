import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "../pages/Home"

const App = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout Element={Home} />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App