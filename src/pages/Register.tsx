import { Form } from "../components/auth/Form"
import type { Field, RegisterRequestBody, RegisterResponse } from "../types/register"
import { useRegister } from "../hooks/useRegister"

const fields: Field<RegisterRequestBody>[] = [
  { initialValue: "", label: "Email", name: "email", type: "email" },
  { initialValue: "", label: "Password", name: "password", type: "password" },
  { initialValue: "", label: "Confirm Password", name: "confirmPassword", type: "password" },
]

export const Register = () => {
  const { error, isPending, mutate } = useRegister()

  return (
    <Form<RegisterRequestBody, RegisterResponse>
      error={error?.response?.data.message}
      fields={fields}
      onSubmit={mutate}
      submitDisabled={isPending}
      submitLabel="Sign up"
      title="Sign up"
    />
  )
}
