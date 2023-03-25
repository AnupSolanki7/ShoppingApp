import Cart from "../pages/Cart"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"


const route = (isLogin:any) => [
    { 
        path: "/", 
        element: isLogin ? <Dashboard/> : <Login/>,
    },
    {
        path:"/cart",
        element: isLogin ? <Cart/> : <Login/>
    }

]

export default route