import { SelectHTMLAttributes, useId } from "react"

type InputProps = {
  label?: string
  options?: { label: string, value: number | string }[]
  full?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ label = '', options = [], full, ...props }: InputProps) => {

  const id = props.id || useId();

  return (
    <div className={full ? "block" : "inline-block"}>
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      <br />
      <select
        id={id}
        {...props}
        className={`border rounded border-gray-400 h-8 px-2 focus:outline focus:outline-1 focus:outline-blue-400 ${full && "w-full"}`}
      >
        {options.map(opt => (
          <option key={`opt-${id}-${opt.value}-${opt.label}`} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

export { Select }