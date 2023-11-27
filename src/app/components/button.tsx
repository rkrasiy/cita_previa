import { FC, ReactNode } from "react";

interface PropsType {
  color?: 'dark' | 'light' | 'green'
  children: ReactNode
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
  fullwidth?: boolean
  className?: string
  disabled?: boolean
}

export const Button = (props: PropsType) => {

  const classes = ({
    default: 'justify-center inline-flex flex-row items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700',
    dark: 'justify-center inline-flex flex-row items-center text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700',
    light: 'justify-center inline-flex flex-row items-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
    green: 'justify-center inline-flex flex-row items-center text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700' 
  })[props.color ?? 'default']

  return (
    <button 
      type={props.type} 
      className={`${classes} ${props.className}`} 
      disabled={props.disabled}
      onClick={props.onClick}>
        {props.children}
      </button>
  )
}