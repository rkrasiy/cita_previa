import { FC } from "react";

interface PropsType {
  label?: string
  name: string
  type: 'text' | 'email' | 'password' | 'numner'
  required?: boolean
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: FC<PropsType> = ({ label, type, name, required, placeholder, value, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type={type} name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required={required} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputField