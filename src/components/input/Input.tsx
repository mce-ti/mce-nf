import { InputHTMLAttributes, useId } from "react"

type InputProps = {
  label?: string
  full?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label = '', full, ...props }: InputProps) => {

  const id = props.id || useId();

  return (
    <div className={full ? "block" : "inline-block"}>
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type="text" {...props}
        className={`border rounded border-gray-400 h-8 px-2 focus:outline focus:outline-1 focus:outline-blue-400 ${full && "w-full"}`}
      />
    </div>
  )
}

export { Input }