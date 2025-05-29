import React from 'react'
import { cn } from '../../../utils/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = "",
  ...rest }) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 shadow-small group transition-all duration-150 ease-in-out",
        className
      )} {...rest}
    >
      {children}
    </div>
  )
}
