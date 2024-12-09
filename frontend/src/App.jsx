import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import StartUp from "./pages/StartUp"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Home from "./pages/Home"
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import { UserDataContext } from "./context/UserContext"

const App = () => {

  const ans = useContext(UserDataContext)
  // console.log(ans);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-home" element={<CaptainHome/>} />
        <Route path="/user-logout" element={<UserLogout />} />
        <Route path="/captain-logout" element={<CaptainLogout />} />
        <Route path="/user-protect-wrapper" element={<UserProtectWrapper />} />
        <Route path="/captain-protect-wrapper" element={<CaptainProtectWrapper />} />
        
      </Routes>
    </div>
  )
}
export default App