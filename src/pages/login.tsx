import { useState } from "react"
import { useLogin } from "../hooks/user"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {error, isError, isPending, mutate} = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({email, password})
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input type="mail" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit" disabled={isPending}>log in</button>
      {isError && <p>{error.response?.data.message}</p>}
    </form>
  )
}
