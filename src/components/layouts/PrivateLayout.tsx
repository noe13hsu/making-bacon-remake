import { Outlet } from "react-router-dom"

export const PrivateLayout = () => {
  return (
    <>
      <p>Temp nav</p>
      <main>
        <Outlet />
      </main>
    </>
  )
}
