import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export type ButtonVariant = 'default' | 'destructive' | 'outline-light'
export type ButtonSize = 'default' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center whitespace-nowrap border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const variants: Record<ButtonVariant, string> = {
      default: 'bg-[#005ec2] text-white border-transparent hover:bg-[#004ba1]',
      destructive: 'bg-red-600 text-white border-transparent hover:bg-red-700',
      'outline-light':
        'bg-transparent text-white border border-white/70 hover:bg-white hover:text-[#005ec2]',
    }

    const sizes: Record<ButtonSize, string> = {
      default: 'h-10 px-4 py-2',
      lg: 'h-12 px-7 text-base',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
