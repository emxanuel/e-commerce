import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "../pages/Home"
import Login from "../pages/Login"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout Element={Home} />} />
                    <Route path="/login" element={<Layout Element={Login} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App