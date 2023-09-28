import Products from "../components/Products.tsx"
import Slide from "../components/Slide.tsx"

const Home = () => {
    
    return (
        <div className="flex flex-col">
            <Slide />
            <Products />
        </div>
    )
}

export default Home