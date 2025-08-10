import { useLogout } from "../hooks/useLogout"

export const Overview = () => {
  const { mutate, isPending } = useLogout()

  return (
    <div>
      <p>Overview...</p>
      <button onClick={() => mutate()}>{isPending ? "Logging out" : "log out"}</button>
    </div>
  )
}
