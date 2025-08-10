import { Navigate, Outlet } from "react-router-dom"

import { useUserQuery } from "../../hooks/useUserQuery"

export const PublicRoute = () => {
  const { data: user, isLoading} = useUserQuery()

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
