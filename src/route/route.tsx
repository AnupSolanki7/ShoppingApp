import Cart from "../pages/Cart"
import CodeEditor from "../pages/CodeEditor"
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
    },
    {
        path:"/code",
        element: isLogin ? <CodeEditor/> : <Login/>
    }

]

export default route