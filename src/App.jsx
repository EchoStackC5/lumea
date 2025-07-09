import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Notfound from "./Pages/Notfound"
import Dermetologistdashboard from "./Pages/demertologistdashboard/Dermetologistdashboard"
import Clientdashboard from "./Pages/Clientdashboard/Clientdashboard"
import AppointmentPage from "./Pages/AppointmentPage"


const lumeaRoutes = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/login", element: <Login/>},
  {path: "/signUp", element: <SignUp/>},
  {path: "/dermetologistdashboard", element: <Dermetologistdashboard/>},
  {path: "/clientdashboard", element: <Clientdashboard/>},
  {path: "/appointmentpage", element: <AppointmentPage />},
  {path: "*", element: <Notfound/>},
  
])


 export default function App() {
  
  return (
    <>
      <RouterProvider router={lumeaRoutes} />
    </>
  )
}


