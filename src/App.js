import { ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './components/Home';
import Dashbord from './components/Dashbord';


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
  {
      path: "/profile",
      element: <Dashbord />
  }
])

function App() {
  return (
    <>
        <RouterProvider router={router} fallbackElement={<>Loading...</>}/>
        <ToastContainer />
    </>
      
    // <div >

    //   {/* <Home/> */}
    //   <Dashbord/>
    // </div>
  );
}

export default App;
