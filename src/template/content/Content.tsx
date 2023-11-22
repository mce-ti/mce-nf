import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => (
  <div className="w-full overflow-y-auto h-[calc(100vh-3.5rem)]">
    <div className="max-w-7xl mx-auto py-5">
      {children}
    </div>
  </div>
)

export { Content }