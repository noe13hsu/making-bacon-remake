import type { InputValue } from "../../types/common"

interface Props {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: InputValue;
}

export const Input: React.FC<Props> = ({ label, name, onChange, type, value }) => {
  return (
    <label>
      <span className="block mb-1 font-semibold">{label}</span>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required
        value={value}
        />
    </label>
  )
}
