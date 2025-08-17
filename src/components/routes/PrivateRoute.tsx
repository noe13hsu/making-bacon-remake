import { Navigate, Outlet } from "react-router-dom"

import { useUser } from "../../hooks/user/useUser"

export const PrivateRoute = () => {
  const { data: user, isError, isLoading } = useUser()

  if (isLoading) {
    return <p>Checking authentication...</p>
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
