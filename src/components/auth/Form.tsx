import { useMemo, useState } from "react"
import type { MutateOptions } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { Input } from "./Input"
import type { Field } from "../../types/login"
import type { ApiErrorResponse } from "../../types/api"
import type { InputValue } from "../../types/common"

interface Props<T extends object, U> {
  error?: string;
  fields: Field<T>[];
  onSubmit: (
    variables: T,
    options?: MutateOptions<U, AxiosError<ApiErrorResponse>, T, unknown> | undefined
  ) => void;
  submitDisabled: boolean;
  submitLabel: string;
  title: string;
}

export const Form = <T extends object, U>({
  error,
  fields,
  onSubmit,
  submitDisabled,
  submitLabel,
  title,
}: Props<T, U>) => {
  const initialFormData = useMemo(() => {
    return fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue
      return acc
    }, {} as T)
  }, [fields])

  const [formData, setFormData] = useState<T>(initialFormData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name, type, value } = event.target

    setFormData(prev => {
      switch (type) {
        case "checkbox":
          return { ...prev, [name as keyof T]: checked }
        case "number":
          return { ...prev, [name as keyof T]: value === "" ? "" : Number(value) }
        default:
          return { ...prev, [name as keyof T]: value }
      }
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map(({ label, name, type }) => (
        <Input
          key={name as string}
          label={label}
          name={name as string}
          onChange={handleChange}
          type={type}
          value={formData[name] as InputValue}
        />
      ))}
      <button type="submit" disabled={submitDisabled}>{submitLabel}</button>
      {error && <p>{error}</p>}
    </form>
  )
}
