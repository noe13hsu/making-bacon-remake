import { Route, Routes } from "react-router-dom"

import "./App.css"
import { PrivateRoute } from "./components/routes/PrivateRoute"
import { PublicRoute } from "./components/routes/PublicRoute"
import { Login } from "./pages/Login"
import { NotFound } from "./pages/NotFound"
import { Overview } from "./pages/Overview"
import { Register } from "./pages/Register"
import { PrivateLayout } from "./components/layouts/PrivateLayout"
import { PublicLayout } from "./components/layouts/PublicLayout"

function App() {
  return (
    <Routes>
      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/overview" element={<Overview />}/>
        </Route>
      </Route>

      {/*Public routes */}
      <Route element={<PublicRoute />}>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      {/* Fallback for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
