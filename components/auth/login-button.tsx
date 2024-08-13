'use client'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'model' | 'redirect'
  asChild?: boolean
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  mode = 'redirect',
  asChild
}) => {
  if (mode === 'model') {
    return <span className="cursor-pointer">TODO:model</span>
  }
  return <span className="cursor-pointer">{children}</span>
}
