import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Layout from "./Layouts/Layout"
import Dashboard from "./Pages/Dashboard"
import NotFound from "./Pages/NotFound"
import ForgotPassword from "./Pages/ForgotPassword"
import OTPVerification from "./Pages/OTPVerification"
import ResetPassword from "./Pages/ResetPassword"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} /> 
          </Route>

          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
