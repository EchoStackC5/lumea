import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
// import Dermetologistdashboard from "./Pages/Dermetologistdashboard"
// import Clientdashboard from "./Pages/Clientdashboard"
import Notfound from "./Pages/Notfound"
// import Clientdashboard from "./Pages/Clientdashboard"
import Dermetologistdashboard from "./Pages/demertologistdashboard/Dermetologistdashboard"
import Clientdashboard from "./Pages/Clientdashboard/Clientdashboard"



const lumeaRoutes = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/login", element: <Login/>},
  {path: "/signUp", element: <SignUp/>},
  {path: "/dermetologistdashboard", element: <Dermetologistdashboard/>},
  {path: "/clientdashboard", element: <Clientdashboard/>},
  {path: "*", element: <Notfound/>},
  
])


 export default function App() {
  
  return (
    <>
      <RouterProvider router={lumeaRoutes} />
    </>
  )
}


