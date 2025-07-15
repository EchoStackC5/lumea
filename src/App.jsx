import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import ClientSignUp from "./Pages/ClientSignUp"
import ClientLogin from "./Pages/ClientLogin"
import Notfound from "./Pages/Notfound"
import Dermetologistdashboard from "./Pages/demertologistdashboard/Dermetologistdashboard"
import Clientdashboard from "./Pages/Clientdashboard/Clientdashboard"
import AppointmentPage from "./Pages/Clientdashboard/AppointmentPage"
import Appointment from "./Pages/demertologistdashboard/Appointment"
import DemOverview from "./Pages/demertologistdashboard/DemOverview"
import SkinAnalysisForm from "./Pages/SkinAnalysisForm"
import AppointmentForm from "./Pages/AppointmentForm"
import DemCalls from "./Pages/demertologistdashboard/DemCalls"
import AiAnalysisResult from "./Pages/AiAnalysisResult"


const lumeaRoutes = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/login", element: <Login/>},
  {path: "/signUp", element: <SignUp/>},
  {path: "/clientsignUp", element: <ClientSignUp/>},
  {path: "/clientlogin", element: <ClientLogin/>},
  {path: "/dermetologistdashboard", element: <Dermetologistdashboard/>},
  {path: "/clientdashboard", element: <Clientdashboard/>},
  {path: "/ai-analyze", element: <AiAnalysisResult/>},
  {path: "/appointmentpage", element: <AppointmentPage />},
  {path: "/appointment", element: <Appointment />},
  {path: "*", element: <Notfound/>},
  {path: "/skin-analysis-form", element: <SkinAnalysisForm />},
  {path: "/appointment-form", element: <AppointmentForm />},
  {path: "/dem-calls", element: <DemCalls />},
  {path: "/demoverview", element: <DemOverview />},
  
])


 export default function App() {
  
  return (
    <>
      <RouterProvider router={lumeaRoutes} />
    </>
  )
}


