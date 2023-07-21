import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from "./context"; // Importez le composant AppProvider depuis votre fichier context

import Home from './components/Home';
import Dashbord from './components/Dashbord';
import NewRecord from './components/NewRecord';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Dashbord />
  },
  {
    path: "/NewRecord",
    element: <NewRecord />

  }
])

function App() {
  return (
    <AppProvider> {/* Ajoutez le composant AppProvider ici pour envelopper vos routes */}
      <RouterProvider router={router} fallbackElement={<>Loading...</>} />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
