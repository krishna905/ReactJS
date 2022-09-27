import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                Home Page
            </div>
            <button onClick={() => navigate('order-summary')}>Place Order</button>
            {/* navigate('order-summary', {replace:true}) ...........this removes the stack history*/}
        </>

    )
}

export default Home
