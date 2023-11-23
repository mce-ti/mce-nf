import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variation?: 'default' | 'blue'
}

const variations = {
  default: '',
  blue: 'text-white bg-blue-500 hover:bg-blue-600 hover:shadow-md shadow-blue-400',
}

const Button = ({ children, variation = 'blue', ...props }: ButtonProps) => (
  <button
    {...props}
    className={`px-4 py-2 rounded transition-all duration-300 ${variations[variation]}`}
  >
    {children}
  </button>
)

export { Button }