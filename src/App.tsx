import { useSelector } from 'react-redux';
import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import route from './route/route';

function App() {
  const isUser = useSelector((state: any) => state?.login?.loginValue?.email)
  const isLogin = isUser !== "" ? true : false

  let routing = useRoutes(route(isLogin))

  return (
    <>

      { isUser ? <Header /> : null}
      {
        routing
      }

    </>
  )
}

const Appwrapper = () => {


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <App />
        </header>
      </div>
    </BrowserRouter>
  );
}


export default Appwrapper;
