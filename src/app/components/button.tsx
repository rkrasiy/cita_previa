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

const Button:FC<PropsType> = (props) => {

  const classes = 'justify-center inline-flex flex-row items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700'

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

export default Button