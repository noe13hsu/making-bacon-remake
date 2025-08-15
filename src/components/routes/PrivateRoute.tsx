import { Navigate, Outlet } from "react-router-dom"

import { useUserQuery } from "../../hooks/user/useUserQuery"

export const PrivateRoute = () => {
  const { data: user, isError, isLoading } = useUserQuery()

  if (isLoading) {
    return <p>Checking authentication...</p>
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
