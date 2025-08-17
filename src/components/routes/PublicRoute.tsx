import { Navigate, Outlet } from "react-router-dom"

import { useUser } from "../../hooks/user/useUser"

export const PublicRoute = () => {
  const { data: user, isLoading} = useUser()

  if (isLoading) {
    return <p>Checking authentication...</p>
  }

  if (user) {
    return <Navigate to="/overview" replace />
  }

  return (
    <Outlet />
  )
}
