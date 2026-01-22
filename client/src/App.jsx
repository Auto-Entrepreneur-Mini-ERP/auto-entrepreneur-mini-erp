import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Layout from "./Layouts/Layout"
import Dashboard from "./Pages/Dashboard"
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

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
