import { useLogin } from "../hooks/user/useLogin"
import type { Field, LoginRequestBody, LoginResponse } from "../types/login"
import { Form } from "../components/auth/Form"

const fields: Field<LoginRequestBody>[] = [
  { initialValue: "", label: "Email", name: "email", type: "email" },
  { initialValue: "", label: "Password", name: "password", type: "password" },
]

export const Login = () => {
  const { error, isPending, mutate } = useLogin()

  return (
    <Form<LoginRequestBody, LoginResponse>
      error={error?.response?.data.message}
      fields={fields}
      onSubmit={mutate}
      submitDisabled={isPending}
      submitLabel="Log in"
      title="Log in"
    />
  )
}
